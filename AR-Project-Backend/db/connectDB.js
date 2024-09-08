import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        console.log("Retrying connection in 5 seconds...");
        setTimeout(connectDB, 10000); // Retry after 10 seconds
        process.exit(1) // 1 is failure, 0 status code is success
    }
}
