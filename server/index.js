import express  from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from 'cors'


import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dbConnection from './db/connectToDB.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;



app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/users',userRoutes)


app.get('/',(req,res)=>{
    res.send('Hello World')
})


app.listen(PORT,()=>{
    dbConnection()
    console.log(`server is running on port ${PORT}`);
    })