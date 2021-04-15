import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './Signup.css'
import { SIGNUP } from '../../redux/actionTypes/actionTypes.js'
import { useHistory } from 'react-router-dom'

function Signup({ authHandler }) {

  const dispatch = useDispatch()
  const history = useHistory()
  const pass = useRef()
  const repeatPass = useRef()

  const signupHandler = (e) => {
    e.preventDefault()
    const { name, sex, email, password } = e.target

     if (pass.current.value === repeatPass.current.value) {
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ name: name.value, sex: sex.value, email: email.value, password: password.value })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          dispatch({ type: SIGNUP, payload: data.user });
          return history.push('/profile')
        } else {
          alert('Не удалось зарегистрировать пользователя')
        }
      })
    } else {
      alert("Пароли не совпадают!")
    }
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
              <input type="radio" id="demo-priority-low" name="sex" value="Female" defaultChecked />
              <label htmlFor="demo-priority-low">Female</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" value="Male" />
              <label htmlFor="demo-priority-normal">Male</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-high" name="sex" value="Other" />
              <label htmlFor="demo-priority-high">Other</label>
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Password</label>
            <input ref={pass} type="password" name="password" required />
          </div>
          <div className="field">
            <label>Repeat password</label>
            <input ref={repeatPass} type="password" name="password" required />
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
