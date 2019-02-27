const { createServer } = require('http')
const next = require('next')
const routes = require('./config/routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) {
      throw err
    }
    /* eslint-disable no-console */
    console.log(`> Ready on http://localhost:${port}`)
    /* eslint-enable no-console */
  })
})
