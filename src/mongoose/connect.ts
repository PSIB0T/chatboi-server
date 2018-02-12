import * as mongoose from 'mongoose';
import {UserSchema,
        MessageSchema,
        GroupSchema} from './types';

mongoose.connect("mongodb://localhost:27017/chatboi");

export const User = mongoose.model("User", UserSchema);
export const Message = mongoose.model("Message", MessageSchema);
export const Group = mongoose.model("Group", GroupSchema);
