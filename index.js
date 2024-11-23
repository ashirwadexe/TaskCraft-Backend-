import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
const app = express();
const PORT = 3000;

dotenv.config(); // Loads variables from .env into process.env
app.use(cookieParser());
app.use(express.json());


//api's
app.use("/api/v1/user", userRoute);







app.listen(PORT, (req, res) => {
    connectDB();
    console.log(`app is listening on PORT ${PORT}`);
});