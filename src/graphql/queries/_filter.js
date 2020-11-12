// ./src/graphql/queries/_filter.js
import { GraphQLList } from 'graphql';

export default function filter(collection, objectType) {
  return {
    type: GraphQLList(objectType.type),
    args: objectType.fields(),
    resolve: async (parent, args) => {
      const inCollection = collection(),
            result = await inCollection.filter.matchAll(args);
      return result
    },
    reject: () => console.log('Errory!')
  }
}
