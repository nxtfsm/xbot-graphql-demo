// ./src/graphql/mutations/index.js
import CreateRecordMutation from './_createRecord';
import DeleteById from './_deleteById';

const Mutations = {
  create: CreateRecordMutation,
  delete: DeleteById
}

export default Mutations
