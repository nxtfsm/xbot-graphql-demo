// ./src/graphql/nodeTypes/_UserType.js
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean } from 'graphql';

const description = 'User record tied to @xaviermicronesia.org account';

const User = {
  type: _type(),
  description: description,
  fields: _fields()
}

function _type() {
  return new GraphQLObjectType({
    name: 'User',
    description: description,
    fields: _fields
  })
}

function _fields() {
  return {
    id: { type: GraphQLID },
    atXavierAccount: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    isEditor: { type: GraphQLBoolean }
  }
}

export default User
