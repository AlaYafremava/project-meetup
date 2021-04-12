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

router.patch('/profile/edit', async (req, res) => {
  console.log(req.body);
  let user
  let { name, surname, sex, bday, phone, city, profession, about } = req.body
  if (name || surname || sex || bday || phone || city || profession || about) {
  // try {
     user = await User.findById(req.body.id)
    // user = await User.findByIdAndUpdate({ _id: req.body.id }, { name: req.body.name, surname: req.body.surname })
    console.log(user);
    user.name = req.body.name.value
    user.surname = req.body.surname.value
    user.sex = req.body.sex.value
    user.bday = req.body.bday
    user.phone = req.body.phone
    user.city = req.body.city
    user.profession = req.body.profession
    user.about = req.body.about
    await user.save()
    console.log(user);
    return res.status(201).json({success: true, user})
  }
  // } catch (error) {
    // }
    return res.status(400).json({ success: false, message: 'Не удалось обновить пользователя' })
})

export default router
