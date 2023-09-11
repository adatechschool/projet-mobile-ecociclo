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
    .then(() => console.log("Connection to the database is established"))
    .catch((err) => console.log("The connection to the database as occur an error:", err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.use(morgan("dev"));

// routes middlewares

app.use("/api/", dataRoutes);

app.listen(8000,'0.0.0.0',(console.log("Server running on port 8000"))) // But 0,0,0,0 for allowing all Ip to connect