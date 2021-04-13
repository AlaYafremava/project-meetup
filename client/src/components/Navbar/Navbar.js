import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="nav_div nav-actions">
      <ul className="actions">
        <li>
          <a href="/profile" className="button nav_btn nav-active">
            About
          </a>
        </li>
        <li>
          <a href="/profile/travels" className="button nav_btn">
            My Travels
          </a>
        </li>
        <li>
          <a href="/profile/friends" className="button nav_btn">
            My Friends
          </a>
        </li>
      </ul>
      <div>
        <a href="/profile/edit" className="button primary">
          Edit profile
        </a>

        {/* <a href="/travels/new" className="button primary">
          Create new travel
        </a> */}
      </div>
    </div>
  )
}

export default Navbar
