import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import app from './app.js'
import mongoose from 'mongoose'

const port = process.env.PORT || 4000
const server = http.createServer(app)

server.listen(port, () => {
  try {
    console.log('>>>>>>>>>>', process.env.DB_ATLAS);
    mongoose.connect(process.env.DB_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log(`
      ***
      Server started at ${port} port
      ***
      `)
  } catch (error) {
    console.log(error)
  }
})
