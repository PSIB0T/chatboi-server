import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';
import {GroupType} from './types';

const query = new GraphQLObjectType({
    name: 'query',
    fields: {
        hello: {
            type: GraphQLString,
            args: {}
        },
        group: {
            type: GroupType,
            args: {}
        }
    }
})

export const schema = new GraphQLSchema({
    query
})