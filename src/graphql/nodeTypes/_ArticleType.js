// ./src/graphql/nodeTypes/_ArticleType.js
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString }
  }
})

export default ArticleType
