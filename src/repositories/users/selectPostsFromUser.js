const getPool = require("../../database/getPool");

const selectPostsFromUser = async (userId) => {
  const pool = getPool();

  const [postsFromUser] = await pool.query(
    "SELECT image, description, creationDate FROM posts WHERE userId = ?",
    [userId]
  );

  return postsFromUser;
};

module.exports = selectPostsFromUser;
