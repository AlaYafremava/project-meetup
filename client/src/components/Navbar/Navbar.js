import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="nav_div">
      <ul className="actions">
        <li>
          <a href="/profile" class="button nav_btn nav-active">
            About
          </a>
        </li>
        <li>
          <a href="/profile/travels" class="button nav_btn">
            My Travels
          </a>
        </li>
        <li>
          <a href="/profile/friends" class="button nav_btn">
            My Friends
          </a>
        </li>
      </ul>
      <ul className="links nav-ul_editbtn">
        <li className="nav-li_editbtn">
          <a href="/profile/edit" className="button primary">
            Edit profile
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
