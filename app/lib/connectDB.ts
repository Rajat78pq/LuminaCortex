import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODBURL;

const connectDB = async () => {
    if(!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
    }else{
        try {
            if(mongoose.connection.readyState === 0) {
                await mongoose.connect(MONGODB_URI);
                console.log("Connected to MongoDB");
            }else{
                console.log("Already connected to MongoDB");
            }
        } catch (error) {
            console.log(`Error connecting to MongoDB: ${error}`);
        }
    }
}

export default connectDB;