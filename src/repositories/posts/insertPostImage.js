const getPool = require("../../database/getPool");

const insertPostImage = async (image, description, userId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO posts (image, description, userId) VALUES (?, ?, ?)",
    [image, description, userId]
  );

  return insertId;
};

module.exports = insertPostImage;
