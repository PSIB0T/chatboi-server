import {GraphQLObjectType, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLList,
        GraphQLNonNull,
        GraphQLID} from 'graphql';
import {GroupType, MessageType, UserType} from './types';

const query = new GraphQLObjectType({
    name: 'query',
    fields: {
        hello: {
            type: GraphQLString,
            args: {}
        },
        group: {
            type: GroupType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        },
        user: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) }
            }
        },
        messages: {
            type: new GraphQLList(MessageType),
            args: {
                groupId: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: GraphQLID },
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query
})