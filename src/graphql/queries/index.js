// ./src/queries/index.js
import GetAllArticles from './_articlesQuery';

const Query = {
  articles: {
    getAll: GetAllArticles
  }
}

export default Query
