// ./src/queries/index.js
import getAllofType from './_getAllofType';
import getById from './_getById';
import filter from './_filter';

const Query = {
  getAll: getAllofType,
  getById: getById,
  filter: filter
}

export default Query
