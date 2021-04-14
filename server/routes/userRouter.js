import Router from "express"
const router = new Router()
import User from "../models/users.js"

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

export default router
