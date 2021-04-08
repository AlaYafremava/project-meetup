import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema({
  vegan: { type: Boolean, default: false },
  travel: { type: Boolean, default: false },
  sport: { type: Boolean, default: false },
  movies: { type: Boolean, default: false },
  architecture: { type: Boolean, default: false },
  videoGames: { type: Boolean, default: false },
  rockMusic: { type: Boolean, default: false },
  classicMusic: { type: Boolean, default: false },
  it: { type: Boolean, default: false },
})

export default mongoose.model('Tag', tagSchema)
