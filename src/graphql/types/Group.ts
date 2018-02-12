import {GraphQLObjectType,
        GraphQLString,
        GraphQLID,
        GraphQLList
} from 'graphql';
import {UserType, MessageType} from './'

export const GroupType = new GraphQLObjectType({
    name: 'Group',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        users: {type: new GraphQLList(UserType)},
        messages: {type: new GraphQLList(MessageType)}
    })
})