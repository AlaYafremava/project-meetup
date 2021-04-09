import Router from "express"
const router = new Router()
import User from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const generateToken = (id) => {
  const payload = { id }
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" })
}

router.route("/signup")
  .post(async (req, res) => {

    try {
      const { name, sex, email, password } = req.body
      console.log(name, sex, email, password);
      const account = await User.findOne({ email })
      if (account) {
        return res.status(400).json({ message: "Email already exist" })
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({ name, sex, email, password: hashPassword })
      // newUser.save()
      const token = generateToken(newUser._id)
      console.log(token);
      return res.status(200).json({ user: newUser, token, success: true })
    } catch (e) {
      res.status(400).json({ message: "signup error" })
    }
  })

router.route("/login")
  .post(async (req, res) => {
    const { email, password } = req.body
    // console.log(email, password);
    const user = await User.findOne({ email })
    // console.log(user);
    // console.log(user.password);
    if (user && bcrypt.compare(password, user.password)) {
      const token = generateToken(user._id)
      //  res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000})
      res.status(201).json({ user: user, token, success: true })
    } else {
      res.status(400).json({ success: false })
    }
  })

export default router
