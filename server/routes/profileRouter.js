import Router from "express"
const router = new Router()
import User from "../models/users.js"
import Social from '../models/socials.js'
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
  let { name, surname, sex, bday, phone, country, city, homeCountry, homeTown, occupation, education, description, telegram, instagram, facebook } = req.body
  // console.log(surname);
  if (name || surname || sex || bday || phone || country || city || homeCountry || homeTown || occupation || education || description || telegram || instagram || facebook) {
    // try {
    user = await User.findById(req.body.id)
    // user = await User.findByIdAndUpdate({ _id: req.body.id }, { name: req.body.name, surname: req.body.surname })
    console.log(user);
    user.name = name
    user.surname = surname
    user.sex = sex
    user.bday = bday
    user.phone = phone
    user.country = country
    user.city = city
    user.homeCountry = homeCountry
    user.homeTown = homeTown
    user.profession = occupation
    user.education = education
    user.about = description
    let userTelegram = 'https://t.me/' + telegram.substring(1)
    user.socials[0] = await Social.create({ title: userTelegram })
    User.findById(req.body.id).populate('socials').socials[0] = 'https://t.me/' + telegram.substring(1)
    user.socials[1] = instagram
    user.socials[2] = facebook
    await user.save()
    console.log(user);
    return res.status(201).json({ success: true, user })
  } else if (!name || !surname || !sex || !bday || !phone || !country || !city || !homeCountry || !homeTown || !occupation || !education || !description || !telegram || !instagram || !facebook) {
    user = await User.findById(req.body.id)
    return res.status(201).json({ success: true, user })
  } else {
    return res.status(400).json({ success: false, message: 'Не удалось обновить пользователя' })
  }
  // } catch (error) {
  // }
})

export default router
