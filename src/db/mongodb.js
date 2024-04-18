import mongoose from "mongoose";
import { MONGODB_URI } from "../../src/db/mongodb.js";
import mongoose from "mongoose";
  //////
const mongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error(`Database connection error: ${err}`);
    process.exit(1);
  }
};


