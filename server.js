require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Inventory Management API is Running...");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
