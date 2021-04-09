import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './Auth.module.css'

// function Auth(props) {
//   const [state, setState] = useState(true)

//   const authHandler = () => {
//     setState(!state)
//   }

//   return (
//     <section>
//       <div
//         id="intro"
//         style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//         <h1>MeetUp</h1>
//         <p>
//           A free app that connects members to a global community of travelers. Use MeetUp to find
//           new places and friends.
//         </p>
//         <ul className="actions">
//           <li>
//             <a href="#main" className="button icon solid solo fa-arrow-down scrolly">
//               Continue
//             </a>
//           </li>
//         </ul>
//       </div>

//       <header id="header">
//         <a href="index.html" className="logo">
//           MEETUP
//         </a>
//       </header>

 
//       <div id="main">
//         {state ? <Login authHandler={authHandler} /> : <Signup authHandler={authHandler} />}
//       </div>
//     </section>
//   )
// }

//  НЕ АДАПТИВ
function Auth(props) {
  const [state, setState] = useState(true)

  const authHandler = () => {
    setState(!state)
  }

  return (
    <section className='authMedia' style={{display: 'flex'}}>
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
