// ./src/graphql/nodeTypes/_UserType.js
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
 } from 'graphql';

const description = 'User record tied to @xaviermicronesia.org account';

export default new GraphQLObjectType({
  description,
  name: 'User',
  fields: _fields()
})

function _fields() {
  return {
    id: { type: GraphQLID },
    atXavierAccount: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    isEditor: { type: GraphQLBoolean }
  }
}
