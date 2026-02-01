import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohitpathak1017_db_user:rohit6387@cluster0.xxmpiul.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
