import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// import Img from './models/img.js'

const app = express()

mongoose.connect('mongodb://localhost:27017/meetup', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// app.get('/cat', async (req, res) => {
//   const imgs = await Img.find()
//   const randomCat = imgs[Math.floor(imgs.length * Math.random())]
//   console.log(randomCat);
//   res.status(200).json(randomCat)
// })

export default app
