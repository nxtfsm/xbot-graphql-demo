// ./src/repository/mongoInterface/_getAll.js

export default function getAll(collection) {
  return new Promise((resolve, reject) => {
    collection.find({}).toArray((err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
}
