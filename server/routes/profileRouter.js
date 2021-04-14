import Router from "express"
const router = new Router()
import User from "../models/users.js"
import Social from '../models/socials.js'
import verToken from '../middlware/auth.js'

router.get('/profile', verToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).populate("userTravels")
    return res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

// изменение свойства visibility у user'a
router.patch('/profile', async (req, res) => {
  const { id, visibility } = req.body;
  if (visibility != undefined) {
    const user = await User.findById(id);
    user.visibility = !visibility;
    await user.save();
    return res.status(201).json({ success: true, user });
  } else {
    return res.status(400).json({ success: false, message: 'Не удалось обновить пользователя' });
  }
})

router.patch('/profile/edit', async (req, res) => {
  // console.log(req.body);
  let user
  let { name, surname, sex, bday, phone, country, city, homeCountry, homeTown, occupation, education, description, telegram, instagram, facebook, tags, languages, avatar } = req.body
  // console.log(bday);
  if (name || surname || sex || bday || phone || country || city || homeCountry || homeTown || occupation || education || description || telegram || instagram || facebook || tags || languages || avatar) {
    // try {
    user = await User.findById(req.body.id)
    // user = await User.findByIdAndUpdate({ _id: req.body.id }, { name: req.body.name, surname: req.body.surname })
    // console.log(sex);
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
    user.tags = tags
    user.languages = languages

    // if (user.telegram.includes('https://t.me/') || user.telegram.includes('@')) {
    user.telegram = telegram

      //user.telegram.substring(13) + telegram.substring(1)
    // } else {
    // user.telegram = 'https://t.me/' + telegram.substring(1)
    // }
    user.instagram = instagram
    user.facebook = facebook
    await user.save()
    // console.log(user);
    return res.status(201).json({ success: true, user })
  } else if (!name || !surname || !sex || !bday || !phone || !country || !city || !homeCountry || !homeTown || !occupation || !education || !description || !telegram || !instagram || !facebook || !tags || !languages) {
    user = await User.findById(req.body.id)
    return res.status(201).json({ success: true, user })
  } else {
    return res.status(400).json({ success: false, message: 'Failed to update user information' })
  }
  // } catch (error) {
  // }
})

export default router
