// ./index.js
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import databaseClient from './config';
import schema from './graphql';

const server = async () => {
  const app = express(),
        port = process.env.PORT;

  databaseClient.connect()

  app.use( cors() );
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      pretty: true
    })
   );

  app.listen(port)
}

server()
