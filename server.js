const express = require("express");
require("dotenv").config();

const connectDatabase = require("./config/dbConfig");

const router = require("./routes/routes");
const postRoutes = require("./routes/postRoutes");

connectDatabase();

const app = express();

const PORT = 3000;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/user", router);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});
