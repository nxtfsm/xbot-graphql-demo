// ./src/graphql/mutations/_createRecord.js
const CreateRecordMutation = (ofObject, inCollection) => ({
  type: ofObject.type,
  args: ofObject.fields(),
  resolve: async (_, { ...args} ) => {
    const newRecord = await inCollection().create({ ...args });
    return newRecord
  }
})

export default CreateRecordMutation
