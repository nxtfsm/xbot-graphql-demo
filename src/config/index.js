// ./src/config/index.js
import { setupDB, getDB} from './_databaseConnection'

const DatabaseConnection = {
  setup: setupDB,
  get: getDB
}

export default DatabaseConnection 
