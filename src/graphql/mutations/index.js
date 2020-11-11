// ./src/graphql/mutations/index.js
import CreateArticleMutation from './_createArticle';
import DeleteById from './_deleteById';

const Mutations = {
  article: {
    create: CreateArticleMutation,
    delete: DeleteById
  }
}

export default Mutations
