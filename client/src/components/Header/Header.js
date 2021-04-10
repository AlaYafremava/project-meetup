import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {

  const logoutHandler = () => {
    window.localStorage.removeItem('token')
  }

  return (
    <header id="header">
      <nav id="nav">
        <div className="linkLogo">
          <Link to="/" className="logo">
            Meetup
          </Link>
        </div>
        <ul className="links headersLinks">
          <li>
            <a href="/dashboard">Hangouts</a>
          </li>
          <li>
            <a href="/travels">Travels</a>
          </li>
          <li>
            <a href="/people/:id">My Profile</a>
          </li>
          <li >
            <a href="/" onClick={logoutHandler}>LogOut</a>
          </li>
        </ul>
      </nav>
    </header>
  //   <header id="header">
  //   <nav id="nav">
  //     <div className="linkLogo">
  //       <Link to="/" className="logo">
  //         Meetup
  //       </Link>
  //     </div>
  //     <ul className="links headersLinks">
  //       <li>
  //         <Link to="/dashboard">Hangouts</Link>
  //       </li>
  //       <li>
  //         <Link to="/travels">Travels</Link>
  //       </li>
  //       <li>
  //         <Link to="/people/:id">My Profile</Link>
  //       </li>
  //       <li className="active">
  //         <Link to="/" onClick={logoutHandler}>LogOut</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>
  )
}

export default Header
