const selectUserByEmail = require("./selectUserByEmail");
const selectPostsFromUser = require("./selectPostsFromUser");
const selectUserById = require("./selectUserById");
const insertUser = require("./insertUser");

module.exports = {
  selectUserByEmail,
  selectPostsFromUser,
  insertUser,
  selectUserById
};
