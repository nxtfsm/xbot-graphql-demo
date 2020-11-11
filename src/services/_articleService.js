// ./src/services/_articleService.js
import MongoDbCollection from '../repository';

const Tutorials = {
  external: () => new MongoDbCollection('externalTutorials'),
  internal: () => new MongoDbCollection('internalTutorials')
}

export default Tutorials
