import React, { useEffect, useState } from 'react'
import './FormEdit.css'
import { useDispatch, useSelector } from 'react-redux'

function FormEdit() {
  const user = useSelector(store => store.auth.user)
  // console.log(user);

  const formHandler = (e) => {
    e.preventDefault()

    let { name, surname, sex, bday, phone, city, profession, about } = e.target
    console.log(name.value, surname.value, sex.value );

    fetch('/profile/edit', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: user._id, name: name.value, surname: surname.value, sex: sex.value, bday: bday.value, phone: phone.value, city: city.value, profession: profession.value, about: about.value })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }


  return (
    <section className='sectionSignup'>
      <form className='formSignup' onSubmit={formHandler}>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" defaultValue ={user.name} required autoFocus />
          </div>
          <div className="field">
            <label>Surname</label>
            <input type="text" name="surname" defaultValue ={user.surname} required />
          </div>

          <div id='sexDiv' className="field">
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="sex" value="woman" dafaultchecked />

              <label htmlFor="demo-priority-low">Woman</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" value="man"/>
              <label htmlFor="demo-priority-normal">Man</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" value="other"/>
              <label htmlFor="demo-priority-normal">Others</label>
            </div>
          </div>

          {<div className="field">
            <label>Email</label>
            <input type="email" name="email" value={user.email} required />
          </div>}

          <div className="field">
            <label>BirthDay</label>
            <input type="date" name="bday" defaultValue ={user.bday} required />
          </div>

          <div className="field">
            <label>Phone</label>
            <input type="tel" name="phone" defaultValue ={user.phone} required />
          </div>

          <div className="field">
            <label>City</label>
            <input type="text" name="city" defaultValue ={user.city} required />
          </div>

          <div className="field">
            <label>Profession</label>
            <input type="text" name="profession" defaultValue ={user.profession} required />
          </div>

          <div className="field">
            <label>About</label>
            <textarea name="about" defaultValue ={user.about} required />
          </div>

          <div className="field">
            <label>Тэги через map()</label>
            <div className="col-6 col-12-small">
              <input type="checkbox" id="demo-copy" name="demo-copy" />
              <label htmlFor="demo-copy">{'тэги'}</label>
            </div>
          </div>

          <div className="field">
            <label>Языки</label>
            <div className="col-12">
              <select name="demo-category" id="demo-category">
                <option value="">- Наши языки -</option>
              </select>
            </div>
          </div>

          <div className="field">
            <div>
              <label>Соц-сети</label>
              через map
            <label>Инстаграмм</label>
              <input type="text" id="instagram" name="instagram" />
            </div>
          </div>
          <button>Редактировать</button>
        </div>
      </form>
    </section>
  )
};

export default FormEdit;
