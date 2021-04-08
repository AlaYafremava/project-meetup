import React from 'react'

function Signup({ authHandler }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <form style={{ margin: '0 auto' }}>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" required autoFocus />
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
        <ul className="actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <li>
            <input type="submit" value="SignUp" />
          </li>
          <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a
              href="#!"
              onClick={authHandler}
              style={{ fontFamily: 'Source Sans Pro, Helvetica, sans-serif', color: '#18bfef' }}>
              LogIn
            </a>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Signup
