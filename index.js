import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
const app = express();
const PORT = 3000;

dotenv.config(); // Loads variables from .env into process.env

app.get('/', (req, res) => {
    res.send("Home Route");
});

app.listen(PORT, (req, res) => {
    connectDB();
    console.log(`app is listening on PORT ${PORT}`);
});