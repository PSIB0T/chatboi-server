import {GraphQLObjectType, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLList,
        GraphQLNonNull,
        GraphQLID} from 'graphql';
import {GroupType, MessageType, UserType} from './types';
import {Group, User, Message} from './../mongoose/connect';

GroupType;
Group;

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            args: {}
        },
        group: {
            type: GroupType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentVal, args) {
                return Group.findById(args.id);
            }
        },
        groups: {
            type: new GraphQLList(GroupType),
            resolve(parentVal, args) {
                return Group.find();
            }
        },
        user: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parentVal, args) {
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentVal, args) {
                return User.find();
            }
        },
        messages: {
            type: new GraphQLList(MessageType),
            args: {
                groupId: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: GraphQLID },
            },
            resolve(parentVal, args) {
                return Message.find({'to': args.groupId})
            }
        }
    })
})

export const schema = new GraphQLSchema({
    query
})