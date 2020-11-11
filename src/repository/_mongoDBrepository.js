// ./src/repository/_mongoDBrepository.js
import { getDB } from '../config';
import { ObjectId } from 'mongodb';

export default class MongoDbCollection {
  constructor(collectionName) {
    this.collection = getDB().collection(collectionName);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection.find({}).toArray((err, data) => {
        if (err) { reject(err) }
        resolve(data)
      });
    });
  }

  getById(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({id: ObjectId(_id) }, (err, data) => {
        if (err) { reject(err) }
        resolve(data)
      })
    })
  }

  create(opt) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(opt, (err, data) => {
        if (err) { reject(err) }
        resolve(data.ops[0])
      });
      1
    });
  }

  deleteById(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndDelete({ id: ObjectId(_id)}, (err, data) => {
          if (err) { reject(err) }
          resolve(data)
        }
      )
    })
  }

}
