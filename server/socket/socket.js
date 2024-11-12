import { Server } from 'socket.io';
import http from 'http';
import express from 'express'

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});
  
const getRecieverSocketId = (recieverId)=>{
    return userSocketMap[recieverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log('A user connected : ',socket.id);
    // Add user to the map
    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }


    // io.emit() is used to send events to all the connected clients.
     io.emit("getOnlineUsers",Object.keys(userSocketMap))
     // /socket.on() is used to listen the events, it can be used on both client and server side.
     socket.on('disconnect',()=>{
         console.log('A user disconnected : ',socket.id)
         delete userSocketMap[userId];
         io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})



export { app, io, server,getRecieverSocketId };