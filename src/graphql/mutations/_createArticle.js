// ./src/graphql/mutations/_createArticle.js
import { ArticleType } from '../nodeTypes';
import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} from 'graphql';

const CreateArticleMutation = (collection) => ({
  type: ArticleType,
  args: {
    content: { type: GraphQLString }
  },
  resolve: async (_, { content }) => {
    const inCollection = collection(),
          newArticle = await inCollection.create({ content });
    return newArticle
  }
})

export default CreateArticleMutation
