// ./config/_databaseConnection.js
const MongoClient = require('mongodb').MongoClient;

let mongoDB;

export const setupDB = callback => {
  const uri = process.env.MONGODB_URI;

  MongoClient.connect(
    uri,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
      mongoDB = client.db('xbotDemo')

      if (err) {
        console.log('err')
      } else {
        console.log('DB Ok')
      }
    }
  )
}

export const getDB = () => mongoDB
