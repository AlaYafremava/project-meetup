import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
  title: String,
  check: { type: Boolean, default: false },
})

export default mongoose.model('Language', languageSchema)
