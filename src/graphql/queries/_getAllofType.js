// ./src/graphql/queries/_getAllofType.js
import { GraphQLList } from 'graphql';

export default function getAllofType(collection, objectType) {
  return {
    type: GraphQLList(objectType),
    args: {},
    resolve: async () => {
      const inCollection = collection(),
            result = await inCollection.getAll();
      return result
    },
    reject: () => console.log('Errory!')
  }
}
