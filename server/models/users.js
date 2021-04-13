import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, trim: true, default:'' },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bday: { type: Date, default: Date.now() },
  phone: { type: Number, default: 0 },
  sex: { type: String, default: '' },
  country: { type: String, default: ''},
  city: { type: String, default: '' },
  homeCountry: { type: String, default: '' },
  homeTown: { type: String, default: '' },
  education: { type: String, default: '' },
  profession: { type: String, default: '' },
  about: { type: String, default: '' },
  avatar: { type: String, default: '' },
  regDate: { type: Date, default: Date.now() },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language'
  }],
  // socials: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Social'
  // }],
  telegram: {type: String, default: ''},
  instagram: {type: String, default: ''},
  facebook: {type: String, default: ''},
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
