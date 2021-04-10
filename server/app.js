import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import peopleRouter from './routes/people.js'
import profileRouter from './routes/profileRouter.js'

import authRouter from './routes/authRouter.js'

const app = express()

mongoose.connect("mongodb+srv://alex:alex123@meetup.4dhze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

// mongoose.connect('mongodb://localhost:27017/meetup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/people', peopleRouter)
app.use('/', profileRouter)
app.use(authRouter)

export default app
