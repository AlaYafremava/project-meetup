import mongoose from 'mongoose'

const mapSchema = new mongoose.Schema({
  coords: {
    lat: Number,
    lng: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

export default mongoose.model('Map', mapSchema)

