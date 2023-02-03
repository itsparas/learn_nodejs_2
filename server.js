const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDatabase = require("./config/dbConfig");

const router = require("./routes/routes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

connectDatabase();

const PORT = 3000;

app.use("/user", router);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});
