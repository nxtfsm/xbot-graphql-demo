// ./src/graphql/_schema.js
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { Tutorials } from '../services';
import { Article } from './nodeTypes';
import Query from './queries';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    externalTutorials: Query.getAll(Tutorials.external, Article.type),
    internalTutorials: Query.getAll(Tutorials.internal, Article.type)
  })
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addExternalTutorial: Mutations.create(Article, Tutorials.external),
    addInternalTutorial: Mutations.create(Article, Tutorials.internal)
    })
  }
);

const schema = new GraphQLSchema({ query: RootQuery, mutation: RootMutation });

export default schema
