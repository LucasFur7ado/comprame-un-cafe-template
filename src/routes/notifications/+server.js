import { sendTelegramMessage } from "$lib/server/sendTelegramMessage"

export const POST = async ({ request }) => {
    const data = await request.json()
    console.log({ data })
    sendTelegramMessage('New coffee =>', data)
    return new Response('ok')
}