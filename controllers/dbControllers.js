import mongoose from "mongoose";
import { Message } from "../models/message.js";

export async function getMessage(req, res) {
     try {
         const message = await Message.findOne({ title: "my-message" });

        if (message) {
            res.json(message);
        }  else {
            res.status(500).json({ message: 'Error getting message' });
        }
     } catch (err) {
        console.error('Error getting message:', err);
        res.status(500).json({ message: 'Error getting message' });
     }
}