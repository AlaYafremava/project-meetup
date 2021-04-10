import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {

  const logoutHandler = () => {
    window.localStorage.removeItem('token')
  }

  return (
    <header id="header">
      <nav id="nav">
        <div className="linkLogo">
          <a href="/" className="logo">

            Meetup
          </a>
        </div>
        <ul className="links headersLinks">
          <li>

            <a href="/dashboard" className="links">Hangouts</a>
          </li>
          <li>
            <a href="/travels">Travels</a>
          </li>
          <li>
            <a href="/people/:id">My Profile</a>
          </li>

          <li /*className="active"*/>
            <a href="/logout" onClick={logoutHandler}>LogOut</a>

          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
