import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await await mongoose.connect(process.env.MONGO_URI!);
    await mongoose.connection.db!.admin().command({ ping: 1 });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error(error);
    console.log("ERROR CONNECTING TO DB");
  } finally {
    await mongoose.disconnect();
  }
};
