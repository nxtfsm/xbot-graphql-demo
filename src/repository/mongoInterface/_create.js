// ./src/repository/mongoInterface/_create.js

export default function create(collection, opt) {
  return new Promise((resolve, reject) => {
    collection.insertOne(opt, (err, data) => {
      if (err) { reject(err) }
      resolve(data.ops[0])
    });
    1
  });
}
