module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL: process.env.NODE_ENV === 'production' ? 'https://api.upsports.app:4400/graphql' : 'http://localhost:4400/graphql',
    WS: process.env.NODE_ENV === 'production' ? 'wss://api.upsports.app:4400/graphql' : 'ws://localhost:4400/graphql',

    APPS: process.env.NODE_ENV === 'production' ? 'https://upsports.app' : 'http://localhost:3000'
  }
}
