
import mongoose from "mongoose";



export async function connectDB() {
  try {
    const MONGO_URI = process.env.MONGO_URI ;
    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB successfully!');

  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

