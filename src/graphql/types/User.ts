import {GraphQLObjectType,
        GraphQLString,
        GraphQLID,
        GraphQLList
} from 'graphql';
import {GroupType, MessageType} from './'
import { Message, Group, User } from '../../mongoose/connect';
Group;
MessageType

export const UserType = new GraphQLObjectType({
name: 'User',
    fields: () => ({
        id: {type: GraphQLID },
        email: {type: GraphQLString },
        username: {type: GraphQLString },
        messages: {
            type: new GraphQLList(MessageType),
            resolve(parentVal){
                return (<any>Message).findMessages(parentVal.messages);
            }
        },
        friends: {
            type: new GraphQLList(UserType),
            resolve(parentVal){
                console.log(parentVal.friends);
                return (<any>User).findUsers(parentVal.friends);
            }
        },
        groups: {
            type: new GraphQLList(GroupType),
            resolve(parentVal){
                console.log(parentVal.groups);
                return (<any>Group).findGroups(parentVal.groups);
            }
        }
    })
})