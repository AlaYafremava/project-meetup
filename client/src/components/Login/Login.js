import React from 'react'

function Login({authHandler}) {

  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <form style={{ margin: '0 auto' }}>
        <div className="fields">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required autoFocus/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
        </div>
        <ul className="actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <li>
            <input type="submit" value="Login" />
          </li>
          <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='#!' onClick={authHandler} style={{ fontFamily: 'Source Sans Pro, Helvetica, sans-serif', color: '#18bfef ' }}>
              SignUp
            </a>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Login
