import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(cookieParser());

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT" + PORT);
  connectDB();
});
