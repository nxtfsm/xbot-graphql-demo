// ./src/graphql/nodeTypes/_ArticleType.js
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import User from './_UserType'

const Article = {
  type: _type(),
  fields: _fields
}

function _type() {
  return new GraphQLObjectType({
    name: 'Article',
    fields: _fields()
  })
}

function _fields() {
  return {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    externalUrl: { type: GraphQLString },
    summary: { type: GraphQLString },
    content: { type: GraphQLString },
    postedBy: { type: User.type }
  }
}

export default Article
