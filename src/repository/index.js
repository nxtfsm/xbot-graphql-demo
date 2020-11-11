// ./src/repository/index.js
import DatabaseConnection from '../config';
import interfaceMongoDB from './_interfaceMongoDB';

const Repository = (name) => {
  const db = DatabaseConnection.get().collection(name);
  return interfaceMongoDB(db);
}

export default Repository
