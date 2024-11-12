import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from 'cors'
import express from 'express'


import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dbConnection from './db/connectToDB.js'

import { app,server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;



app.use(express.json())
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,  
    methods: 'GET,POST,PUT,DELETE,OPTIONS',  
  };
app.use(cors(corsOptions));
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/users',userRoutes)


app.get('/',(req,res)=>{
    res.send('Hello World')
})


server.listen(PORT,()=>{
    dbConnection()
    console.log(`server is running on port ${PORT}`);
    })