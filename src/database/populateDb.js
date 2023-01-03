require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");

const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Inserting users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        ("pepe@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Pepe"),
        ("maria@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "María"),
        ("gonzalo@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Gonzalo")
    `);

    /* console.log("Inserting posts...");

    await pool.query(`
        INSERT INTO posts (title, description, userId) VALUES 
        ("Mi viaje a Ibiza", "Genial para salir de fiesta", 1),
        ("New York", "Es una ciudad muy chula, viaje inolvidable", 2),
        ("Madrid", "Me gustó bastante, pero se nota demasiado estrés", 3)
    `);

    console.log("Inserting likes...");

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (1, 2),
        (1, 3),
        (2, 1)
    `);
 */
    console.log("¡All done! 🚀");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
