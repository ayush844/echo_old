import path from "path"
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectToMongoDB from './db/connectToMongoDB.js';

import {app, server} from './socket/socket.js'

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser());

const __dirname = path.resolve();

const PORT = process.env.PORT || 9000;

app.use('/api/auth', authRoutes);

app.use('/api/message', messageRoutes);

app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running at port ${PORT}`);
})