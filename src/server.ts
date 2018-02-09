import * as express from 'express';
import * as config from './../config.json';

// Create Express server
const app = express();

app.listen(8080, () => {
    console.log("Server is running at port 8080");
})