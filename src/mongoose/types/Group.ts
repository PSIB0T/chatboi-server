import { Observable } from 'rxjs/Observable';
import {Schema, Promise} from 'mongoose';

import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap';
import { User, Group } from '../connect';


export const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    }],
    messages: [{
        messageId: {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        },
        
    }]
})

GroupSchema.statics.findGroups = function(groupIds: any[]) {
    let groups = [],
        User = this;
    return new Promise((resolve, reject) => {
        Observable.from(groupIds)
                    .mergeMap(groupId => {
                        return Observable.fromPromise(Group.findById(groupId.groupId));
                    })
                    .subscribe((group) => {
                        groups.push(group)
                    }, (err) => {
                        reject(err);
                    }, () => {
                        resolve(groups);
                    });      
    })
}

GroupSchema.methods.addUsers = function(users: any[]){
    const group = this;
    users.map((user) => group.users.push({
        userId: user.id
    }));
    return group.save();
}

GroupSchema.statics.saveMessage = function(message: any) {
    return Group.findById(message.to)
                .then((group: any) => {
                    group.messages.push({messageId: message.id});
                    return group.save();
                })
}

