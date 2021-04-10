import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import app from './app.js'
import mongoose from 'mongoose'

const port = process.env.PORT || 4000
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`
  ***
  Server started at ${port} port
  ***
  `);
})
;