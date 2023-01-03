MÓDULOS A INSTALAR

- express // para servidor
- joi // para validar datos
- nodemon -D // para facilitar el servidor local
- bcrypt // para encriptar passwords
- uuid // para generar el código de confirmación de regristro del usuario
- mysql2 // para generar tablas
- sharp // para procesar las imágenes
- jsonwebtoken // para generar las pulseritas de los users
- express-fileupload // para poder subir imágenes
- cors // para React NO
- node-mailjet // para mandar la clave de acceso por correo NO
- dotenv // para llamar al enviroment

MÓDULOS A REQUERIR DE NODE

- fs
- path

SQL

- Tabla de users (registrados)
- Tabla de posts
- Tabla de likes

EXTRA!

- Tabla de comments

ENDPOINTS CONTROLLERS
PÚBLICO

- BÚSQUEDA (GET/posts) DE TODOS LOS POST PÚBLICADOS POR FECHA DE SUBIDA INVERSA\*
- BÚSQUEDA (GET/users/:texto) DEL PERFIL DE UN USUARIO CONCRETO QUE NOS MUESTRE SU GALERÍA DE FOTOS
- BÚSQUETA (GET/posts/:texto) DE POSTS SEGÚN DESCRIPCIÓN
  - Mirar bien como hacer búsquedas personalizadas desde el parámetro
- ACCESO (POST/login) DE USUARIOS REGISTRADOS A PARTIR DE SU CORREO Y CONTRASEÑA Y QUE NOS DEVUELVE SU TOKEN CORRESPONDIENTE
- CREACIÓN (POST/users) DE USUARIO RECIBIENDO SUS DATOS: nombre de usuario, contraseña, email, extras: avatar, edad, biografía QUE NOS DEVUELVE UN CÓDIGO DE REGISTRO QUE MANDA AL MAIL

PRIVADOS

Endpoints que necesitan pasar por un middleware que compruebe el token para realizar las solicitudes a la API

- CREACIÓN (POST/posts) DE UN POST RECIBIENDO UNA FOTO (CON DESCRIPCIÓN ALT) Y UNA DESCRIPCIÓN (OPCIONAL). LA FOTO TIENE QUE PROCESARSE (1080x1080px con SHARP)
- CREACIÓN (POST/posts/:id/likes) DE UN LIKE ASOCIADO A UN POST, SI YA EXISTE EL LIKE SE ELIMINA EL LIKE

EXTRA!

- ALTERACIÓN (PUT/users) DE LOS DATOS DEL USUARIO Y QUE NOS DEVUELVA UNA CONFIRMACIÓN
- CREACIÓN (POST/posts/:id/comments) DE COMENTARIOS ASOCIADOS A POSTS POR USUARIOS REGISTRADOS

MIDDLEWARES
ERRORES

- ERROR 404
- ERROR 500

VALIDACIÓN

- TOKENS
