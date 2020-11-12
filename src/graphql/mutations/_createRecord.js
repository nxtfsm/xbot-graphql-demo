// ./src/graphql/mutations/_createRecord.js
function CreateRecord(ofObject, inCollection) {
  return {
    type: ofObject,
    args: ofObject.fields,
    resolve: async (_, { ...args} ) => {
      const newRecord = await inCollection().create({ ...args });
      return newRecord
    }
  }
}

export default CreateRecord
