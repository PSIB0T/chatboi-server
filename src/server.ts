import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import {addMockFunctionsToSchema} from 'graphql-tools'
import {schema} from './graphql';
import * as _ from './../config.json';

// Create Express server
const app = express();
const config = <any>(_);

addMockFunctionsToSchema({schema})

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(config.port, () => {
    console.log(`Server is running at port ${config.port}`);
})