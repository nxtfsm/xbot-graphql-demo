// ./src/graphql/nodeTypes/_ArticleType.js
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserType } from './_UserType'

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: {
    _id: { type: GraphQLID },
    externalUrl: { type: GraphQLString },
    summary: { type: GraphQLString },
    content: { type: GraphQLString }
    //postedBy: { type: UserType }
  }
})

export default ArticleType
