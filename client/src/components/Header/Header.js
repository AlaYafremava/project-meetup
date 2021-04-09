import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <header id="header">
      <nav id="nav">
        <div className="linkLogo">
          <Link to="/" class="logo">
            Meetup
          </Link>
        </div>
        <ul className="links headersLinks">
          <li>
            <Link to="/dashboard">Hangouts</Link>
          </li>
          <li>
            <Link to="/travels">Travels</Link>
          </li>
          <li>
            <Link to="/people/:id">My Profile</Link>
          </li>
          <li class="active">
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
