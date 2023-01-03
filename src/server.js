// requerimos el módulo de dotenv para poder utilizar los valores del .env de la raíz del documento
require("dotenv").config();
// requerimos del módulo express para poder utilizar el servidor de express
const express = require("express");

// requerimos los middlewares de errores
const {
  handleError,
  handleNotFound,
} = require("./middlewares");

const app = express();

// llamamos al puerto del .env
const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());

/**
 * 
 * ENDPOINTS USUARIO ANÓNIMO
 * 
 */

// 1. Búsqueda de todos los post publicados por orden cronológico (del más reciente al más antiguo)
app.get("/posts", getPosts);

// 2. Búsqueda del perfil de un usuario concreto con todos sus datos (nombre y correo electrónico?) y además un listado de todos sus posts
app.get("/users/:id", getUserGallery);

// 3. Búsqueda de post por un texto descriptivo dado como parámetro
app.get("/posts/:whatever", getPostByDescription)

// 4. Inicio de sesión mediante nombre/email y contraseña
app.post("/login", loginUser);

// 5. Registro a partir de nombre, email, contraseña
app.post("/users", createUser);




/**
 * 
 * ENDPOINTS USUARIO REGISTRADO
 * 
 */



/**
 * 
 * MIDDLEWARES DE ERRORES
 * 
 */

app.use(handleNotFound);
app.use(handleError);




app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });