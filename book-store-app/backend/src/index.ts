import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./db.ts";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;

connectDB();

app.listen(3000, () => console.log(`Server is up and running at port ${port}`));
