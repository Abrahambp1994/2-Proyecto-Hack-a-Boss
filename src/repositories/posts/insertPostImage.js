const getPool = require("../../database/getPool");

const insertPostImage = async (imageName, postId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO posts (image, postId) VALUES (?, ?)",
    [imageName, postId]
  );

  return insertId;
};

module.exports = insertPostImage;
