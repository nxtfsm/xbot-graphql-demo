// ./src/graphql/_schema.js
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { Tutorials } from '../services';
import { GetAllArticles } from './queries';
import { CreateArticleMutation } from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    externalTutorials: GetAllArticles(Tutorials.external),
    internalTutorials: GetAllArticles(Tutorials.internal)
  })
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addExternalTutorial: CreateArticleMutation(Tutorials.external),
    addInternalTutorial: CreateArticleMutation(Tutorials.internal)
    })
  }
);

const schema = new GraphQLSchema({ query: RootQuery, mutation: RootMutation });

export default schema
