// ./src/repository/index.js
import DatabaseClient from '../config';
import InterfaceMongoDB from './mongoInterface';

const Repository = (name) => {
  const db = DatabaseClient.getDB().collection(name);
  return InterfaceMongoDB(db);
}

export default Repository
