import Router from "express"
const router = new Router()
import Map from "../models/maps.js"
import User from "../models/users.js"

router
  .get('/map', async (req, res) => {
    try {
      const markers = await Map.find()
      return res.status(200).json(markers)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

router
  .post('/map/new-coords', async (req, res) => {
    const { coords, userId } = req.body;
    const userAddNewCoords = await (await User.findById(userId))
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
    // console.log('edit-coords');
    const { coords, id } = req.body;
    // console.log(id, 'id');
    console.log(coords, 'coords');

    const editCoords = await Map.findOne({ _id: id })
    // console.log(editCoords);
    try {
      // editCoords.coords = coords;
      editCoords.coords = coords;
      await editCoords.save();
      return res.status(200).json({ success: true, editCoords })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

router
  .delete('/map/del-coords', async (req, res) => {
    // console.log(req.body, 'req.body');
    const { id } = req.body;
    console.log(id, 'айди на делит');
    try {
      await Map.findOneAndDelete({_id: id});
      res.status(200).json({ success: true })
    } catch {
      res.status(404).json({ message: 'coords delete error' })
    }
  })

export default router
