// ./src/repository/mongoInterface/_getByFilterMatchAll.js

export default function getByFilterMatchAll(collection, properties) {
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
