'use strict'

const GraphQLUpload = require('graphql-upload/GraphQLUpload.js')

module.exports = {
  Upload: GraphQLUpload,

  Mutation: {
    upload: async (parent, { file }, { app }) => {

      const upload = await app.upload.file(file, { folder: 'public/profile' })

    }
  }
}