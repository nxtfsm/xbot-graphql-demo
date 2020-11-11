// ./src/graphql/_schema.js
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { Tutorials } from '../services';
import Query from './queries';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    externalTutorials: Query.articles.getAll(Tutorials.external),
    internalTutorials: Query.articles.getAll(Tutorials.internal)
  })
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addExternalTutorial: Mutations.article.create(Tutorials.external),
    addInternalTutorial: Mutations.article.create(Tutorials.internal)
    })
  }
);

const schema = new GraphQLSchema({ query: RootQuery, mutation: RootMutation });

export default schema
