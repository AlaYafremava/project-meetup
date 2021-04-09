import mongoose from "mongoose"
import User from './models/users.js'

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/meetup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  const users = [
    {
      name: 'Oleg',
      surname: 'Jut',
      email: 'hdvfgd@mail.ru',
      password: '625523',

    },
    {
      name: 'jkhbhjg',
      surname: 'kg',
      email: 'hdvhggd@mail.ru',
      password: '62557623',    },
    {
      name: 'lk',
      surname: 'llll',
      email: 'kjgiygkj@mail.ru',
      password: '62559823',    },
  ]
  await User.insertMany(users);
  await mongoose.connection.close();
}

// seed()
