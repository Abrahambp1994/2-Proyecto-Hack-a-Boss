const { userIdSchema } = require("../../schemas/users");
const {
    selectUserById
  } = require("../../repositories/users");
  const {
    selectImagesFromUser
  } = require("../../repositories/posts");
const { generateError } = require("../../utils");

const getUserGallery = async (req, res, next) => {
    try {

        // Recibimos el id como parámetro
        const { id } = req.params;

        // Validamos que ese id cumple con los requisitos
        await userIdSchema.validateAsync(id);

        // Seleccionamos el user de la DB que tenga ese id
        const user = await selectUserById(id);

        // Si el user no existe, lanzamos un error
        if (!user) {
            generateError("User doesn't exist", 404);
        }

        // Seleccionamos los posts que tiene el user en la DB
        const postImage = await selectImagesFromUser(id);

        // Creamos una propiedad "images" en el objeto del user y guardamos en ella el array de imágenes recogidas de la DB
        user.images = postImage;

        res.status(200).send({ status: "ok", data: user });
    } catch (error) {
        next(error);
    }
};

module.exports = getUserGallery;