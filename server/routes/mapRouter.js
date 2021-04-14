import Router from "express"
const router = new Router()
import Map from "../models/maps.js"
import User from "../models/users.js"

router
  .post('/map/new-coords', async (req, res) => {
    console.log(req.body);
    const { coords, userId } = req.body;
    const userAddNewCoords = await (await User.findById(userId))
    console.log(userAddNewCoords);
    try {
      const newCoords = await Map.create({
        coords,
        user: userAddNewCoords,
      })
      return res.status(200).json(newCoords)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

router
  .post('/map/edit-coords', async (req, res) => {
    const { coords, id } = req.body;
    const editCoords = await Map.findOne({ _id: id })
    console.log(coords);
    try {
      editCoords.coords = coords;
      await editCoords.save();
      return res.status(200).json({ success: true, editCoords })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

router
  .del('/map/edit-coords', async (req, res) => {
    const { id } = req.body;
    try {
      await Map.findByIdAndDelete(id);
      res.status(200).json({ success: true })
    } catch {
      res.status(404).json({ message: 'coords delete error' })
    }
  })

export default router
