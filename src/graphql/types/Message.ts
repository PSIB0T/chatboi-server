import {GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import {GroupType, UserType} from './'
import * as GraphQLDate from 'graphql-date';

export const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        id: {type: GraphQLID },
        to: {type: GroupType},
        from: {type: UserType},
        text: {type: GraphQLString},
        createdAt: {type: GraphQLDate}
    })
})