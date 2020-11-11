// ./src/graphql/mutations/_deleteArticle.js
import { GraphQLID } from 'graphql';

const DeleteById = (collection) => ({
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
    },
  resolve: async (_, { _id } ) => {
    const inCollection = collection(),
          response = await inCollection.delete(_id);

    if (response.ok) {
      return _id;
      }
    }
})

export default DeleteById
