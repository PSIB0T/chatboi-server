import {Schema, Promise} from 'mongoose';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap';

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

MessageSchema.statics.findMessages = function(messageIds: any[]){
    let messages = [];
    let Message = this;
    return new Promise((resolve, reject) => {
        Observable.from(messageIds)
                .mergeMap(message => {
                    return Observable.fromPromise(Message.findById(message.messageId));
                })
                .subscribe((user) => {
                    messages.push(user)
                }, (err) => {
                    reject(err);
                }, () => {
                    console.log(messages);
                    resolve(messages);
                });
    });
}