import EmailSvg from './components/icons/EmailSvg.js'
import GithubSvg from './components/icons/GithubSvg.js'
import TelegramSvg from './components/icons/TelegramSvg.js'

export const config = {
    site_url: 'https://comprame-un-cafe-template.vercel.app/', // Your app URL here
    title: 'Ayúdame con un café',
    description: `<p>Esta página fue creada con un propósito claro: brindarte 
    la oportunidad de ser parte activa de mi proceso creativo. Aquí, tú, como 
    seguidor leal, tienes la opción de apoyarme económicamente y contribuir 
    directamente a la realización de nuevos proyectos emocionantes. Tus donaciones 
    y contribuciones serán utilizadas de manera transparente y responsable.
    <br/><br/> Mi contacto:</p>`,
    currency_id: 'UYU',
    coffee_price: 50,
    contact: [
        {
            name: 'Telegram',
            link: 'https://t.me/user',
            icon: TelegramSvg,
        },
        {
            name: 'Github',
            link: 'https://github.com/user?tab=repositories',
            icon: GithubSvg,
        },
        {
            name: 'Email',
            link: 'mailto:user@gmail.com',
            icon: EmailSvg,
        }
    ],
    telegram_messages: true
}