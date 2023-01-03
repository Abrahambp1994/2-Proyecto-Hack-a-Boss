const env = require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });