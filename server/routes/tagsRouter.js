import Router from 'express'
const router = new Router()
import Tag from "../models/tags.js"
import User from "../models/users.js"
import verToken from "../middlware/auth.js"

router.get('/tags', async (req, res) => {
  // console.log(123);
  try {
      const tags = await Tag.find()
      // console.log(tags);
      if (!tags) {
          return res.status(400).json({
              message: 'Tags not found',
          })
      }
      return res.status(200).json({ tags, success: true })
  } catch (error) {
      res.status(400).json({ message: 'tags load error' })
  }
})

router.patch('/tag', async (req, res) => {
  console.log(req.user);
  const tag1 = (await User.findOne(req.user.id)).populate('tags').tag._id
  console.log(tag1);
  const tag = await Tag.findById(req.body.id)
  console.log(tag);
  tag1.check = !tag1.check
  await tag1.save()
  await User.findByIdAndUpdate(req.user.id, { $push: { tags: tag1 } })

  res.status(200).json(tag, us)
})

export default router
