import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("ERROR CONNECTING TO MONGODB");

    console.error(error);

    process.exit(1);
  }
};
