import Router from 'express'
const router = new Router()

import User from '../models/users.js'

// router.route('/:id')
//   .get(async (req, res) => {
//     let user
//     try {
//       const { id } = req.params
//       user = await User.findById(id)
//     } catch (err) {
//       res.status(400).json({ success: false })
//     }
//     res.status(201).json(user)
//   })
  // .post(async (req, res) => {
  //   const { name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels } = req.body

  //   if (name && surname && email && password && bday && sex) {
  //     const newUser = await User.create({ name, surname, email, password, bday, phone, sex, city, profession, regDate, tags, languages, socials, userTravels, pastTravels, futureTravels })

  //     res.status(201).json(newUser)
  //   } else {
  //     res.status(400).json({ create: false })
  //   }
  // })
  // .put(async (req, res) => {
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
