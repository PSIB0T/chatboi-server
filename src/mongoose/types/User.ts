import {Schema, Promise} from 'mongoose';
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
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

UserSchema.methods.addFriend = function(user2: any){
    let user = this;
    user.friends.push({
        messageId: user2._id
    })
    return user.save()
}

UserSchema.statics.findUsers = function(userIds: any[]) {
    let users = [],
        User = this;
    return new Promise((resolve, reject) => {
        Observable.from(userIds)
                    .mergeMap(userId => {
                        return Observable.fromPromise(User.findById(userId.userId));
                    })
                    .subscribe((user) => {
                        users.push(user)
                    }, (err) => {
                        reject(err);
                    }, () => {
                        resolve(users);
                    });      
    })
}