module.exports = {
  apiHost: process.env.API_HOST,
  baseUrl: process.env.BASE_URL,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  server: {
    host: process.env.SERVER_HOST,
    call: process.env.SERVER_CALL,
  },
}
