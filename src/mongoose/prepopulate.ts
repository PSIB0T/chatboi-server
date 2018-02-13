import * as faker from 'faker';
import {User, Group, Message} from './connect';

export function prepopulate() {
    let user, user2, group;
    User.remove({})
        .then((res) => {
            return Message.remove({});
        })
        .then((res) => {
            return Group.remove({});
        })
        .then((res) => {
            group = new Group({
                name: 'Group1'
            })
            return group.save();
        })
        .then((res) => {
            user = new User({
                email: faker.internet.email(),
                username: faker.internet.userName(),
                password: 'password'
            });
            return user.save();
        })
        .then((res) => {
            user2 = new User({
                email: faker.internet.email(),
                username: faker.internet.userName(),
                password: 'password'
            })
            return user2.save();
        })
        .then((user2: any) => {
            return user.addFriend(user2);
        })
        .then((res: any) => {
            return group.addUsers([user, user2])
        })
        .then((res: any) => {
            let message = new Message({
                to: group.id,
                from: user._id,
                text: "Hey yo!",
                createdAt: new Date()
            })

            return message.save();
        })
        .then((message: any) => {
            return (<any>Group).saveMessage(message)
        })
        .then((res: any) => {
            console.log("Message saved")
        })

}
