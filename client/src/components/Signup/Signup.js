import React from 'react'
import { useDispatch } from 'react-redux'
import './Signup.css'
import { SIGNUP } from '../../redux/actionTypes/actionTypes.js'
import { useHistory } from 'react-router-dom'

function Signup({ authHandler }) {

  const dispatch = useDispatch()
  const history = useHistory()

  const signupHandler = (e) => {
    e.preventDefault()
    const { name, sex, email, password } = e.target
    // console.log(e.target.sex.value);
    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ name: name.value, sex: sex.value, email: email.value, password: password.value })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          console.log(data);
          dispatch({ type: SIGNUP, payload: data });
          return history.push('/profile')
        } else {
          alert('Не удалось зарегистрировать пользователя')
        }
      })
  }

  return (
    <section className='sectionSignup'>
      <form className='formSignup' onSubmit={signupHandler}>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" required autoFocus />
          </div>
          <div id='sexDiv' className="field">
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="sex" value="woman" defaultChecked />
              <label htmlFor="demo-priority-low">Woman</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" value="man" />
              <label htmlFor="demo-priority-normal">Man</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-high" name="sex" value="other" />
              <label htmlFor="demo-priority-high">Other</label>
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="field">
            <label>Repeat password</label>
            <input type="password" name="password" required />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="SignUp" />
          </li>
          <li className='loginLi'>
            <a className='loginA'
              href="#!"
              onClick={authHandler}>
              LogIn
            </a>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Signup
