import * as faker from 'faker';
import {User, Group, Message} from './connect';

export function prepopulate() {
    User.remove({})
        .then((res) => {
            let users = [];
            for (let i = 0; i < 10; i++) {
                users.push({
                    email: faker.internet.email(),
                    username: faker.internet.userName(),
                    password: 'password'
                })
            }

            User.insertMany(users);
        })
        .then((res) => {
            console.log(res);
        })

}
