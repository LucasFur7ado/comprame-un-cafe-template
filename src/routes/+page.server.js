import { sendTelegramMessage } from '$lib/server/sendTelegramMessage'
import { validate } from '$lib/services/validateFunction'
import { ACCESS_TOKEN } from '$env/static/private'
import { messageSchema } from '$lib/data/schemas'
import sanitizeHtml from 'sanitize-html'
import { loading } from '$lib/store'
import { config } from '$lib/config'

export const actions = {
    default: async ({ fetch, request }) => {
        loading.set(true)
        let { name, message, quantity } = Object.fromEntries(await request.formData())
        quantity = +sanitizeHtml(quantity)
        message = sanitizeHtml(message)
        name = sanitizeHtml(name)

        const validation = validate({ name, message }, messageSchema)
        if (!validation.success)
            return validation

        const result = { success: true }
        const mpUrl = 'https://api.mercadopago.com/checkout/preferences'
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }

        const mpData = {
            "items": [{
                quantity,
                title: 'Café',
                unit_price: config.coffee_price,
                currency_id: config.currency_id,
            }],
            "payer": {
                "name": name ?? 'User',
            },
            "back_urls": {
                "success": config.site_url + "success",
                "pending": config.site_url + "pending",
                "failure": config.site_url + "failure"
            },
            "notification_url": config.site_url + "notifications"
        }

        sendTelegramMessage(name, message)

        await fetch(mpUrl, {
            headers,
            method: 'POST',
            body: JSON.stringify(mpData),
        })
            .then(async res => {
                loading.set(false)
                const data = await res.json()
                result.data = data
                if (data.status == 400)
                    throw new Error('error')
            })
            .catch(error => {
                loading.set(false)
                result.success = false
                result.error = 'Algo salió mal, puedes intentar más tarde'
                console.log({ error })
            })
        return result
    }
}