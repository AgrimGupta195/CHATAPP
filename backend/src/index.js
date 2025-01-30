import express from "express";
import authRoutes from "./routes/authRoute.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    console.log("Runnig on Port "+PORT);
    
})