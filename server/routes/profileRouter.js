import Router from "express"
const router = new Router()
import User from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import app from "../app.js"
import verToken from '../middlware/auth.js'

router.get('/profile', verToken, async (req, res) => {
  // console.log(req.headers.authorization);

  // const user = await User.findOne({ _id: req.user.id })
  // if (user) {
  //   res.status(201).json(user)
  // }
  // res.status(400).json({ success: false })
})

export default router
