import mongoose from 'mongoose'

const socialSchema = new mongoose.Schema({
  title: { type: String },
})

export default mongoose.model('Social', socialSchema)
