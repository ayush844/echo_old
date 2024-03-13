import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res)=>{
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;

        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]}
        })


        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        }


        const newMessage = new Message({
            senderId,
            recieverId,
            message 
        })


        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])


        const recieverSocketId = getRecieverSocketId(recieverId);

        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage", newMessage);
            
        }


        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendMessage controller ", error.message);
        res.status(500).json({error: "internal server error"});
    }
}


export const getMessages = async (req, res)=>{
    try {
        const {id: userToChatId} = req.params;

        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);

        
    } catch (error) {
        console.log("error in getMessage controller ", error.message);
        res.status(500).json({error: "internal server error"});
    }
}