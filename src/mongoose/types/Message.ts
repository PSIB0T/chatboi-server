import {Schema} from 'mongoose';

export const MessageSchema = new Schema({
    to: {
        type: Schema.Types.ObjectId,
        required: true
    },
    from: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: String,
    createdAt: Date
})