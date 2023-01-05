const { insertPost } = require("../../repositories/posts");
const { createPostSchema } = require("../../schemas/posts");
const { processAndSaveImage } = require("../../utils");

const createPost = async (req, res, next) => {
  try {

    const userId = req.auth.id;

    // Validamos el body de la petición para ver si cumple los requisitos establecidos en el createPostSchama
    await createPostSchema.validateAsync(req.body);

    // Nos traemos la description del body
    const { description } = req.body;

    // Las imágenes que envía el cliente en la petición las vamos a recoger en req.files.images. Si el cliente no envía ninguna imagen, req.files va a ser undefined. Creamos una variable "images" donde guardamos req.files.images, o en caso de que no haya ninguna imagen, un array vacío
    let image = req.files?.image;

    // Creamos un array "uploadedImages" donde guardaremos la información de las fotos que sube el cliente. Este array luego se lo mandaremos en la respuesta, para que pueda ver los datos de las fotos que se han subido
    const uploadedImage = [];

    // Procesamos y guardamos la imagen en la carpeta de uploads. La función nos retorna el nombre con el que se ha guardado la imagen
    const imageName = await processAndSaveImage(image.data);

    // Llamamos al repositorio para que inserte el post en la DB
    const insertedPostId = await insertPost({
      description,
      userId,
      imageName
    });

    // Metemos en el array de "uploadedImages" un objeto con la información de la imagen guardada e insertada en la DB
    uploadedImage.push({
      image: imageName,
    });

    // Enviamos una respuesta con status 201 y los datos del post creado (incluidas las imágenes que se han subido)
    res.status(201).send({
      status: "ok",
      data: {
        id: insertedPostId,
        description,
        userId,
        images: uploadedImage,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
