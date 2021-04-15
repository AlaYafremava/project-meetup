import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import peopleRouter from './routes/peopleRouter.js'
import profileRouter from './routes/profileRouter.js'
import travelRouter from './routes/travelRouter.js'
import authRouter from './routes/authRouter.js'
import tagsRouter from './routes/tagsRouter.js'
import userRouter from './routes/userRouter.js'
import mapRouter from './routes/mapRouter.js'
import morgan from 'morgan'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/people', peopleRouter)
app.use(profileRouter)
app.use(authRouter)
app.use(travelRouter)
app.use(tagsRouter)
app.use(userRouter)
app.use(mapRouter)

export default app
