// ./src/config/index.js
import { connect, getDB } from './_databaseClient';

const DatabaseClient = {
  connect: connect,
  getDB: getDB
}

export default DatabaseClient
