// ./src/repository/mongoInterface/_getById.js
import { ObjectId } from 'mongodb';

export default function getById(collection, _id) {
  return new Promise((resolve, reject) => {
    collection.findOne({id: ObjectId(_id) }, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    })
  })
}
