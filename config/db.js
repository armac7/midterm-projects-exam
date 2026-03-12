import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: 'test' });

        console.log('Connected to MongoDB');
        console.log("Database: ", mongoose.connection.name);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with an error code
    }
}