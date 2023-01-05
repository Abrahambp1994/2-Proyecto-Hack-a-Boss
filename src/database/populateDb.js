require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");

const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Inserting users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        (
        "pepe@email.com", 
        "${await bcrypt.hash("123456",10)}",
         "Pepe"
        ),
        (
        "maria@email.com",
        "${await bcrypt.hash("123456",10)}",
        "María"
        ),
        (
        "gonzalo@email.com",
        "${await bcrypt.hash("123456",10)}",
        "Gonzalo"
        )
    `);

    console.log("Inserting posts...");

    await pool.query(`
        INSERT INTO posts (image, description, userId) VALUES 
        ("o83f7gcbo3487bog.jpg", "Genial para salir de fiesta", 1),
        ("o83f7gcbo3487bog.jpg", "Es una ciudad muy chula, viaje inolvidable", 2),
        ("o83f7gcbo3487bog.jpg", "Me gustó bastante, pero se nota demasiado estrés", 1)
    `);

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (1, 2),
        (1, 3),
        (2, 1)
    `);

    console.log("¡All done! 🚀");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
