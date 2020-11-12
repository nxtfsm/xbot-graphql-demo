// ./src/graphql/nodeTypes/_ArticleType.js
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import User from './_UserType'

const description = "article record for blog posts"

export default new GraphQLObjectType({
  description,
  name: 'Article',
  fields: _fields()
})

function _fields() {
  return {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    externalUrl: { type: GraphQLString },
    summary: { type: GraphQLString },
    content: { type: GraphQLString },
    postedBy: { type: User }
  }
}
