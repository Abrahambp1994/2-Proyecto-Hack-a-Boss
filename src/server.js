require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload")


/* CONTROLLERS: USERS */

const {
  loginUser,
  createUser,
  getUserGallery
} = require("./controllers/users");


/* CONTROLLERS: POSTS */

const {
  getPosts,
  createPost
} = require("./controllers/posts");


/* MIDDLEWARES */

const {
  handleError,
  handleNotFound,
  validateAuth
} = require("./middlewares");


const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload())


/* ENDPOINTS: PÚBLICOS */

// 1. Búsqueda de todos los post publicados por orden cronológico (del más reciente al más antiguo)
/* app.get("/posts", getPostsByTime); */

// 2. Búsqueda del perfil de un usuario concreto (name) y sus imágenes (image, description, creationDate)
app.get("/users/:id", getUserGallery);

// 3. Búsqueda de post por un texto descriptivo dado como parámetro
app.get("/posts", getPosts);

// 4. Inicio de sesión mediante nombre/email y contraseña ✅
app.post("/login", loginUser); 

// 5. Registro a partir de nombre, email, contraseña ✅
app.post("/users", createUser);


/* ENDPOINTS: PRIVADOS */

// 6. Publicar un post, que reciba una imágen (procesarla con sharp (con unas dimensiones y un tamaño máximo) y una descripción
app.post("/posts", validateAuth, createPost);

// 7. Publicar/Retirar un like de un post
/* app.post("/posts/:id/like", togglePostLike); */


/* ERRORES */

app.use(handleNotFound);
app.use(handleError);


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });