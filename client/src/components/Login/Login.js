import React from 'react'
import './Login.css'

function Login({authHandler}) {

  return (
    <section className='sectionLogin'>
      <form className='formLogin' >
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
            <a className='signupA' href='#!' onClick={authHandler}>
              SignUp
            </a>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Login
