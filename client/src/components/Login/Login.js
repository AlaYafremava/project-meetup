import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '../../redux/actionTypes/actionTypes'

function Login({ authHandler }) {

  const dispatch = useDispatch()
  const history = useHistory()
  const store = useSelector(store => store)

  const loginHandler = (e) => {
    e.preventDefault()
    const { email, password } = e.target
    // console.log(email.value, password.value);
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          // console.log(data);
          localStorage.setItem('token', data.token);
          dispatch({ type: LOGIN, payload: data.user });
          history.push('/profile')
        } else {
          alert('Не удалось войти в аккаунт')
        };
      })
    console.log(store);
  }

  return (
    <section className='sectionLogin'>
      <form onSubmit={loginHandler} className='formLogin' >
        <div className="fields">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required autoFocus />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Login" />
          </li>
          <li className='signupLi'>
            <Link className='signupA' to='/' onClick={authHandler}>
              SignUp
            </Link>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Login
