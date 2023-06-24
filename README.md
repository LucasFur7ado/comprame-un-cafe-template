# Set up
## Clona el repositorio

El primer paso es clonar el repositorio, ubicándote en la carpeta donde quieras el código, ejecuta el comando:

~~~
git clone https://github.com/LucasFur7ado/comprame-un-cafe-template.git
~~~

## .env 

Para que la aplicación funcione se necesitan tres variables de entorno, dos opcionales.


Clonado el repositorio, renombra el archivo *.env.template* a *.env* y reemplaza las variables:
~~~
CHAT_ID='id del chat de Telegram donde quieres recibir los mensajes'
BOT_TOKEN='API token del bot de Telegram'
ACCESS_TOKEN='Access token de tu aplicación en Mercado Pago'
~~~

Para obtener el ACCESS_TOKEN debes acceder a [Mercado Pago Developers](https://www.mercadopago.com.uy/developers/es) (adecúa la URL a tu país) y crear una aplicación. En el apartado de credenciales de producción se mostrará esta información.

## config.js

En el archivo */src/lib/config.js* se especifica toda la información de la aplicación.
Si quieres recibir mensajes a través de Telegram asegúrate de tener el siguiente campo en true; *telegram_messages*, además de las variables de entorno establecidas.

El *site_url* debe coincidir con la URL final de la aplicación. Si estás probando la aplicación en local, es probable que tengas que usar *https://localhost:5173*.

En este archivo puedes agregar tantos links de contacto como quieras.

Además es importante que *currency_id* corresponda a tu país. (Mercado pago debe estar disponible para tu país, por supuesto).

## Deploy

Para poner la aplicación en funcionamiento podemos usar [Vercel](https://vercel.com).
Al momento de realizar el deploy debemos subir los archivos a un repositorio, y es importante incluir el archivo *.env*, dado que si no se incluye, vercel no reconocerá las variables de entorno importadas.

Obviamente el repositorio debe ser privado.

Cuando la aplicación esté funcionando recuerda actualizar *site_url* en el archivo *config.js* y actualizar el repositorio.
