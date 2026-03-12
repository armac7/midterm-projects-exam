import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true }
});

export const Message = mongoose.model('Message', messageSchema);