import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : ""

export const connectionDB = async () => {
    await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        dbName: 'mercado'
    })
}

export const testAuthentication = async () => {
    try {
        await connectionDB()
        await mongoose.connection.db.admin().ping()
        console.log('banco de dados conectado')
    } catch (error) {
        console.error('incapaz de se conectar ao banco de dados ', error)
    }
}
