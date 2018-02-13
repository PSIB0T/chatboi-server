import {GraphQLObjectType,
        GraphQLString,
        GraphQLID,
        GraphQLList
} from 'graphql';
import {UserType, MessageType} from './'
import { Group, User, Message } from '../../mongoose/connect';
UserType;
Group;

export const GroupType = new GraphQLObjectType({
    name: 'Group',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentVal) {
                return (<any>User).findUsers(parentVal.users);
            }
        },
        messages: {
            type: new GraphQLList(MessageType),
            resolve(parentVal) {
                return (<any>Message).findMessages(parentVal.messages);
            }
        },
    })
    
})