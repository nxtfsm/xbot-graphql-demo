// ./src/graphql/_schema.js
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { Tutorials } from '../services';
import { Article } from './nodeTypes';
import Query from './queries';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    external: Query.getAll(Tutorials.external, Article),
    internal: Query.getAll(Tutorials.internal, Article),
    externalFilter: Query.filter(Tutorials.external, Article),
    internalFilter: Query.filter(Tutorials.internal, Article)
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

export default new GraphQLSchema({ query: RootQuery, mutation: RootMutation });
