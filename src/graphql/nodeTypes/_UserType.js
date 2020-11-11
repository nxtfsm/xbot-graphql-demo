// ./src/graphql/nodeTypes/_UserType.js
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User record tied to @xaviermicronesia.org account',
  fields: () => ({
    id: { type: GraphQLID },
    atXavierAccount: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    isEditor: { type: GraphQLBoolean }
  })
})

export default UserType
