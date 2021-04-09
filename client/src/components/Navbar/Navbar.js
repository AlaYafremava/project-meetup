import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <nav id="navbar">
      <ul className="links">
        <li>
          <Link to="/profile">About</Link>
        </li>
        <li>
          <Link to="/profile/mytravels">My Travels</Link>
        </li>
        <li class="active">
          <Link to="/profile/myfriends">My Friends</Link>
        </li>
      </ul>
      <ul className="links">
        <li>
          <Link to="/profile" className="button primary">
            Edit profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
