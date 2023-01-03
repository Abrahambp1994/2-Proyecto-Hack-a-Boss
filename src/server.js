// requerimos el módulo de dotenv para poder utilizar los valores del .env de la raíz del documento
require("dotenv").config();
// requerimos del módulo express para poder utilizar el servidor de express
const express = require("express");

/**
 * 
 * CONTROLLERS: USERS
 * 
 */

const {
  loginUser,
  createUser,
  getUserGallery
} = require("./controllers/users");

/**
 * 
 * MIDDLEWARES
 * 
 */

const {
  handleError,
  handleNotFound,
} = require("./middlewares");

const app = express();

const { PORT } = process.env;

app.use(express.json());

/**
 * 
 * ENDPOINTS USUARIO ANÓNIMO
 * 
 */

// 1. Búsqueda de todos los post publicados por orden cronológico (del más reciente al más antiguo)
/* app.get("/posts", getPostsByTime); */

// 2. Búsqueda del perfil de un usuario concreto con todos sus datos (nombre y correo electrónico?) y además un listado de todos sus posts
app.get("/users/:id", getUserGallery);

// 3. Búsqueda de post por un texto descriptivo dado como parámetro
/* app.get("/posts/:whatever", getPostByDescription); */

// 4. Inicio de sesión mediante nombre/email y contraseña
app.post("/login", loginUser);

// 5. Registro a partir de nombre, email, contraseña
app.post("/users", createUser);




/**
 * 
 * ENDPOINTS USUARIO REGISTRADO
 * 
 */

// 6. Publicar un post, que reciba una imágen (procesarla con sharp (con unas dimensiones y un tamaño máximo) y una descripción
/* app.post("/posts", createPost); */

// 7. Publicar/Retirar un like de un post
/* app.post("/posts/:id/like", togglePostLike); */


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