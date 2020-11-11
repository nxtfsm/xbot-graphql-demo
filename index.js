import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { setupDB } from './src/config';
import schema from './src/graphql';

const app = express(),
      port = process.env.PORT;

setupDB()

app.use( cors() );
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
 );

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port)
