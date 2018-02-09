import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';

const query = new GraphQLObjectType({
    name: 'query',
    fields: {
        hello: {
            type: GraphQLString,
            args: {},
            resolve() {
                return "Hello world";
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query
})