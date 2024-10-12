import express  from "express";
import mongoose from  "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import dbConnection from './db/connectToDB.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use('/api/auth',authRoutes)


app.get('/',(req,res)=>{
    res.send('Hello World')
})


app.listen(PORT,()=>{
    dbConnection()
    console.log(`server is running on port ${PORT}`);
    })