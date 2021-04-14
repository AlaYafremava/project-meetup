import Router from "express"
const router = new Router()
import User from "../models/users.js"
import Tag from "../models/tags.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import verToken from "../middlware/auth.js"


const maxAge = 3 * 24 * 60 * 60

const generateToken = (id) => {
  const payload = { id }
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" })
}

router.get('/', verToken, async (req, res) => {
  // console.log(req.user);

})

router.route("/signup")
  .post(async (req, res) => {

    try {
      const { name, sex, email, password } = req.body
      // console.log(name, sex, email, password);
      const account = await User.findOne({ email })
      const tags = [
        {
          id: 1,
          title: 'vegan',
          check: false
        },
        {
          id: 2,
          title: 'travel',
          check: false
        },
        {
          id: 3,
          title: 'sport',
          check: false
        },
        {
          id: 4,
          title: 'architecture',
          check: false
        },
        {
          id: 5,
          title: 'video games',
          check: false
        },
        {
          id: 6,
          title: 'rock music',
          check: false
        },
        {
          id: 7,
          title: 'classic music',
          check: false
        },
        {
          id: 8,
          title: 'IT',
          check: false
        },
        {
          id: 9,
          title: 'running',
          check: false
        },
        {
          id: 10,
          title: 'science',
          check: false
        },
        {
          id: 11,
          title: 'street food',
          check: false
        },
        {
          id: 12,
          title: 'movies',
          check: false
        },
      ]
      const languages = [
        {
          title: 'English',
          check: false
        },
        {
          title: 'Russian',
          check: false
        },
        {
          title: 'Spanish',
          check: false
        },
        {
          title: 'Chinese',
          check: false
        },
        {
          title: 'French',
          check: false
        },
        {
          title: 'Italian',
          check: false
        },
        {
          title: 'German',
          check: false
        },
        {
          title: 'Japanese',
          check: false
        },
        {
          title: 'Korean',
          check: false
        },
      ]
      if (account) {
        return res.status(400).json({ message: "Email already exist" })
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({
        name, sex, email, password: hashPassword, tags, languages
      })
      // await newUser.save()
      const token = generateToken(newUser._id)
      return res.status(200).json({ user: newUser, token, success: true })
    } catch (e) {
      console.log(e.message);
      res.status(400).json({ message: "Signup error" })
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
      res.status(201).json({ user: user, token, success: true })
    } else {
      res.status(400).json({ success: false })
    }
  })

// router.get('/logout', verToken, (req, res) => {
//   res.status(200).json({ success: true })
// })

export default router
