// ./src/services/_articleService.js
import Repository from '../repository';

const Tutorials = {
  external: () => Repository('externalTutorials'),
  internal: () => Repository('internalTutorials')
}

export default Tutorials
