import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

function Auth(props) {
  const [state, setState] = useState(true)

  const authHandler = () => {
    setState(!state)
  }

  return (
    <section style={{display: 'flex'}}>
      <div id="intro" style={{width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h1>MeetUp</h1>
        <p>
          A free app that connects members to a global community of travelers. Use MeetUp to find
          new places and friends.
        </p>
        {/* <ul className="actions">
          <li>
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul> */}
      </div>
      <div id="footer" style={{width: '40%'}}>

        {state ? <Login authHandler={authHandler}/> : <Signup authHandler={authHandler}/> }
       
      </div>
    </section>
  )
}

export default Auth
