import {GraphQLObjectType,
        GraphQLString,
        GraphQLID,
        GraphQLList
} from 'graphql';
import {GroupType, MessageType} from './'

export const UserType = new GraphQLObjectType({
name: 'User',
    fields: () => ({
        id: {type: GraphQLID },
        email: {type: GraphQLString },
        username: {type: GraphQLString },
        messages: {type: new GraphQLList(MessageType)},
        friends: {type: new GraphQLList(UserType)},
        groups: {type: new GraphQLList(GroupType)}
    })
})