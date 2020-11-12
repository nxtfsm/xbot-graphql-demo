// ./src/graphql/queries/_getAllofType.js
import { GraphQLList } from 'graphql';

export default function getAllofType(collection, objectType) {
  return {
    type: GraphQLList(objectType.type),
    resolve: async () => {
      const inCollection = collection(),
            result = await inCollection.getAll();
      return result
    },
    reject: () => console.log('Errory!')
  }
}
