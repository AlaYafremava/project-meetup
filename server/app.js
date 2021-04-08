import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import peopleRouter from './routes/people'

const app = express()

mongoose.connect('mongodb://localhost:27017/meetup', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/people', peopleRouter)

export default app
