import { BOT_TOKEN, CHAT_ID } from '$env/static/private'
import { config } from '$lib/config'

export const sendTelegramMessage = async (name, message) => {
    if (!config.telegram_messages || !name || !message) return null
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}`
    const telegramData = { text: `${name} \n ${message}` }
    fetch(telegramUrl, {
        method: 'POST',
        body: JSON.stringify(telegramData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .catch(error => console.log({ error }))
}