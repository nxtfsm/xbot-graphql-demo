// ./src/repository/_interfaceMongoDB.js
import { ObjectId } from 'mongodb';

export default function interfaceMongoDB(collection) {
  return {
    getAll: () => _getAll(collection),
    getById: (_id) => _getById(collection, _id),
    create: (opt) => _create(collection, opt),
    deleteById: (_id) => _deleteById(collection, _id),
    filter: {
      matchAll: (args) => _getByFilterMatchAll(collection, args)
    }
  }
}

function _getAll(collection) {
  return new Promise((resolve, reject) => {
    collection.find({}).toArray((err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
}

function _getByFilterMatchAll(collection, properties) {
  const query = (function() {
        const keyValues = Object.entries(properties);
        const queryConditions = keyValues.map(pair => {
                return { [pair[0]]: { "$in": [pair[1]] } }
              });
        return { $and: queryConditions }
      })()

 return new Promise((resolve, reject) => {
   collection.find(query).toArray((err, data) => {
     if (err) { reject(err) }
     resolve(data)
   })
 })
}

function _getById(collection, _id) {
  return new Promise((resolve, reject) => {
    collection.findOne({id: ObjectId(_id) }, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    })
  })
}

function _create(collection, opt) {
  return new Promise((resolve, reject) => {
    collection.insertOne(opt, (err, data) => {
      if (err) { reject(err) }
      resolve(data.ops[0])
    });
    1
  });
}

function _deleteById(collection, _id) {
  return new Promise((resolve, reject) => {
    collection.findOneAndDelete({ id: ObjectId(_id)}, (err, data) => {
        if (err) { reject(err) }
        resolve(data)
      }
    )
  })
}
