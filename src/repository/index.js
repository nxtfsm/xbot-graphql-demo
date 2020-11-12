// ./src/repository/index.js
import DatabaseClient from '../config';
import InterfaceMongoDB from './mongoInterface';

export default function Repository(name) {
  const db = DatabaseClient.getDB().collection(name);
  return InterfaceMongoDB(db);
}
