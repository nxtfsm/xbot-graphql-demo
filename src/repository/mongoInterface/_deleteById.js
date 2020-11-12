// ./src/repository/mongoInterface/_deleteById.js
import { ObjectId } from 'mongodb';

export default function deleteById(collection, _id) {
  return new Promise((resolve, reject) => {
    collection.findOneAndDelete({ id: ObjectId(_id)}, (err, data) => {
        if (err) { reject(err) }
        resolve(data)
      }
    )
  })
}
