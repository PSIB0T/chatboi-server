import {Schema} from 'mongoose';

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true        
    },
    messages: [{
        messageId: Schema.Types.ObjectId
    }],
    friends: [{
        friendId: Schema.Types.ObjectId
    }],
    groups: [{
        groupId: Schema.Types.ObjectId
    }]
})