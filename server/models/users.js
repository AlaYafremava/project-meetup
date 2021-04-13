import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bday: { type: Date },
  phone: { type: Number },
  sex: { type: String },
  country: { type: String },
  city: { type: String },
  homeCountry: { type: String },
  homeTown: { type: String },
  education: { type: String },
  profession: { type: String },
  about: { type: String },
  avatar: { type: String },
  regDate: { type: Date, default: Date.now() },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language'
  }],
  socials: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Social'
  }],
  userTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
  pastTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
  futureTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  visibility: { type: Boolean, default: false },
  map: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Map'
  }
})

export default mongoose.model('User', userSchema)
