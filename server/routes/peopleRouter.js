import Router from 'express'
const router = new Router()
import User from '../models/users.js'
// import verToken from '../middlware/auth.js'

router.get('/', async (req, res) => {
  try {
    const people = await User.find()
    const peopleSort = people.map(el => ({
      _id: el._id,
      name: el.name,
      surname: el.surname,
      country: el.country,
      city: el.city,
      telegram: el.telegram,
      instagram: el.instagram,
      facebook: el.facebook,
      avatar: el.avatar,
      bday: el.bday,
      sex: el.sex,
      homeCountry: el.homeCountry,
      homeTown: el.homeTown,
      education: el.education,
      profession: el.profession,
      about: el.about,
      regDate: el.regDate,
      tags: el.tags,
      languages: el.languages,
      userTravels: el.userTravels,
      pastTravels: el.pastTravels,
      futureTravels: el.futureTravels,
      friends: el.friends,
      visibility: el.visibility,
      map: el.map,
    }))
    return res.status(200).json(peopleSort)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

router.post('/:id/friends/new', async (req, res) => {
  try {
    const newFriend = await User.findOne({ _id: req.body.idFriend })

    await User.findByIdAndUpdate(req.params.id, { $push: { friends: newFriend } })
    if (newFriend) {
      return res.status(200).json(newFriend)
    }
  } catch (e) {
    console.error(e.message)
    res.status(400).json({ message: 'Friend add error' })
  }
})

router.delete('/:id/friends/new', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.body.id } })
    return res.status(200).json({ success: true })
  } catch (e) {
    console.error(e.message)
    res.status(404).json({ message: 'Friend remove error' })
  }
})
export default router
