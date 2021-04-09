import React from 'react'
import './Signup.css'

function Signup({ authHandler }) {
  return (
    <section className='sectionSignup'>
      <form className='formSignup'>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" required autoFocus />
          </div>
          <div id='sexDiv' className="field">
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="sex" checked />
              <label htmlFor="demo-priority-low">Woman</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" />
              <label htmlFor="demo-priority-normal">Man</label>
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
