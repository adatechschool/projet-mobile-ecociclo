import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import dataRoutes from "./routes/dataRoutes.js";

dotenv.config();

const app = express();
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERROR:", err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.use(morgan("dev"));

// routes middlewares

app.use("/api/", dataRoutes);

app.listen(8000, (console.log("Server running on port 8000")))