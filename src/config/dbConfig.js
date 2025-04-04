import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    console.log("Connecting to MongoDB with URL:",process.env.MONGO_URL); // Debug log
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB: ");
    console.log(error);
  }
}
