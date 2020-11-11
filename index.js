import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import DatabaseConnection from './src/config';
import schema from './src/graphql';

const app = express(),
      port = process.env.PORT;

DatabaseConnection.setup()

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
