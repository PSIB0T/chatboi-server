import {Schema} from 'mongoose';

export const GroupSchema = new Schema({
    name: String,
    users: [{
        userId: Schema.Types.ObjectId,
    }],
    messages: [{
        messageId: Schema.Types.ObjectId
    }]
})