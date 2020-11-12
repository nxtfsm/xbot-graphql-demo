// ./src/graphql/mutations/index.js
import CreateRecord from './_createRecord';
import DeleteById from './_deleteById';

const Mutations = {
  create: CreateRecord,
  delete: DeleteById
}

export default Mutations
