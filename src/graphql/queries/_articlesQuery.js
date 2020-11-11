// ./src/graphql/queries/_articlesQuery.js
import { GraphQLList } from 'graphql';
import { ArticleType } from '../nodeTypes';

const GetAllArticles = (collection) => ({
  type: GraphQLList(ArticleType),
  args: {},
  resolve: async () => {
    const inCollection = collection(),
          articles = await inCollection.getAll()
    return articles
  },
  reject: () => console.log('Errory!')
})

export default GetAllArticles
