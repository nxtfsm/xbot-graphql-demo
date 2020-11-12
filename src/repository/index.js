// ./src/repository/index.js
import DatabaseClient from '../config';
import interfaceMongoDB from './_interfaceMongoDB';

const Repository = (name) => {
  const db = DatabaseClient.getDB().collection(name);
  return interfaceMongoDB(db);
}

export default Repository
