'use strict'

const fp = require('fastify-plugin')

const { resolve } = require('path')

const mercurius = require('mercurius')

const { typeDefs, resolvers } = require(resolve('src/gql/merge'))

const { makeExecutableSchema } = require('@graphql-tools/schema')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = fp(async (app) => {
  app.register(mercurius, {
    schema,
    subscription: true,
    graphiql: process.env.NODE_ENV === 'development'
  })
}, { name: 'mercurius' })
