module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '123456',
      database: 'promo_upsports'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: '54.232.15.193',
      user: 'gopro',
      password: 'GO$$2077@pro',
      database: 'promo_upsports'
    },
    pool: {
      min: 1,
      max: 5,
      afterCreate: function (connection, callback) {
        connection.query('SET TIMEZONE = UTC', function (err) {
          callback(err, connection)
        })
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ssl: {
      rejectUnauthorized: false
    }
  }
}
