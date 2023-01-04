require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");


const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Inserting users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        ("Fernando@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Fernando"),
        ("Pilar@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Pilar"),
        ("Paula@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Paula"),
        ("Pablo@email.com", "${await bcrypt.hash(
            "123456",
            10
          )}", "Pablo")
    `);

    console.log("Inserting posts...");

    await pool.query(`
        INSERT INTO posts (image, description, userId) VALUES 
        ("", "Ruta por Gredos. Precioso día rodeado de amigos", 1),
        ("", "Italia. Gran país para disfrutar de sus monumentos", 2),
        ("", "Formigal. Bonito lugar para hacer deporte y disfrutar de la naturaleza", 3),
        ("", "Crucero por el Nilo. Impresionante viaje en barco", 4)

    `);

    console.log("Inserting likes...");

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (3, 2),
        (1, 3),
        (2, 1),
        (4, 4)
    `);

    console.log("¡Datos insertados! 🥳");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
