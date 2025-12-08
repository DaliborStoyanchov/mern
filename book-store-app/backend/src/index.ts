import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./db.ts";

const app = express();

const port = process.env.PORT || 3000;

connectDB();

app.listen(3000, () => console.log(`Server is up and running at port ${port}`));
