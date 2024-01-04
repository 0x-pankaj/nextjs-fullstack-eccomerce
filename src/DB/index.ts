import { DB_NAME } from '@/constants';
import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    } catch (error) {
        console.log("mongo_db connection error: ", error);
    }
}