'use strict'

const fp = require('fastify-plugin')

const auth = require('mercurius-auth')

module.exports = fp(async (app) => {
  app.register(auth, {
    authContext(context) {
      return {
        identity: context.reply.request.headers['x-access-token']
      }
    },
    async applyPolicy(auth, parent, args, context, info) {

      if (!context.auth.identity) {

        throw new Error('Usuário não autenticado')
      }

      else throw new Error('A sessão não foi encontrada')

    },

    authDirective: 'auth'
  })
}, { dependencies: ['mercurius'] })
