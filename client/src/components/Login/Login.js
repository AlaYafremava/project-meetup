import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '../../redux/actionTypes/actionTypes'

function Login({ authHandler }) {

  const dispatch = useDispatch()
  const history = useHistory()
  // const store = useSelector(store => store)

  const loginHandler = (e) => {
    e.preventDefault()
    const { email, password } = e.target
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          dispatch({ type: LOGIN, payload: data.user });
          history.push('/profile')
        } else {
          alert('Failed access to this account')
        };
      })
    // console.log(store);
  }

  // const loadImageHandler = (event) => {
  //     event.preventDefault();
  //     const data = new FormData();
  //     console.log(event.target.files[0]);
  //     data.append('photo',event.target.files[0] );
  //     // data.append('name', 'Test Name');
  //     // data.append('desc', 'Test description');
  //     fetch("http://localhost:4000/upload", {
  //          method: 'POST',
  //          headers: {
  //              'Accept': 'application/json',
  //          },
  //          body: data
  //     }).then((response) =>  {
  //        return response.text();
  //     })
  // }

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
            <input type="submit" style={{outline: 'none'}} value="Login" />
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
