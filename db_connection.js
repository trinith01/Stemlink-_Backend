import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGO_URI; ;
        if (!connectionString) {
            throw new Error("MongoDB connection string is missing in environment variables");
        }

        const conn = await mongoose.connect(connectionString);

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
 
