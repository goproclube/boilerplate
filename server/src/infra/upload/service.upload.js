'use strict'

const fp = require('fastify-plugin')

const fs = require('fs')
const util = require('util')
const stream = require('stream')

const { resolve, join } = require('path')

const pipeline = util.promisify(stream.pipeline)

const { v4: uuid } = require('uuid')

module.exports = fp(async (app) => {

  app.decorate('upload', {
    file: file
  })

  async function file(file, opts) {

    try {
      const { filename, createReadStream } = await file

      const name = uuid() + '-' + filename

      const rs = createReadStream()
      const ws = fs.createWriteStream(join(resolve(opts.folder), name))

      await pipeline(rs, ws)

      return name

    } catch (e) {

      return new Error(e)
    }
  }
}, { dependencies: ['upload'] })