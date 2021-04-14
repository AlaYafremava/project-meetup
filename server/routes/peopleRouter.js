import Router from 'express'
const router = new Router()
import User from '../models/users.js'
import verToken from '../middlware/auth.js'

router.get('/', async (req, res) => {
  try {
    const people = await User.find()
    const peopleSort = people.map(el => ({
      name: el.name,
      surname: el.surname,
      country: el.country,
      city: el.city,
      telegram: el.telegram,
      instagram: el.instagram,
      facebook: el.facebook,
      avatar: el.avatar
    }))
    return res.status(200).json(peopleSort)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

// router.route('/:id')
//   .get(verToken, async (req, res) => {
//     let user
//     try {
//       const { id } = req.params
//       user = await User.findById(id)
//     } catch (err) {
//       res.status(400).json({ success: false })
//     }
//     res.status(201).json(user)
//   })
// .post(verToken, async (req, res) => {
//   const { name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels } = req.body

//   if (name && surname && email && password && bday && sex) {
//     const newUser = await User.create({ name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels })

//     res.status(201).json(newUser)
//   } else {
//     res.status(400).json({ create: false })
//   }
// })
// .put(verToken, async (req, res) => {
//   let user;
//   const { id } = req.params
//   const { name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels } = req.body
//   // console.log('>>>>>>>', req.params.id);
//   try {
//     user = await User.findByIdAndUpdate({ _id: id }, { name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels });
//   } catch (error) {
//     return res.json({ success: false, errorMessage: 'Не удалось обновить запись в базе данных.' });
//   }
//   return res.json({ success: true, user });
// })

export default router
