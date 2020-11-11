// ./src/graphql/mutations/_updateById.js
import { GraphQLID, GraphQLString } from 'graphql';

function updateMutation(inCollection, objectType) {
  return {
    type: objectType,
    args: {
      _id: { type: GraphQLID },

    }
  }
}
