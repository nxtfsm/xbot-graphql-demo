// ./src/repository/mongoInterface/index.js
import create from './_create';
import deleteById from './_deleteById';
import getAll from './_getAll';
import getByFilterMatchAll from './_getByFilterMatchAll';
import getById from './_getById';

export default function interfaceMongoDB(collection) {
  return {
    getAll: () => getAll(collection),
    create: (opt) => create(collection, opt),
    deleteById: (_id) => deleteById(collection, _id),
    filter: {
      id: (_id) => getById(collection, _id),
      matchAll: (args) => getByFilterMatchAll(collection, args)
    }
  }
}
