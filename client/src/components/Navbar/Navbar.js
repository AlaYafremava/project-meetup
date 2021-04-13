import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ navAboutHandler, navMyTravelsHandler, navMyFriendsHandler }) {
  return (
    <div className="nav_div nav-actions">
      <ul className="actions">
        <li>
          <button onClick={navAboutHandler} className="button nav_btn nav-active">
            About
          </button>
        </li>
        <li>
          <button onClick={navMyTravelsHandler} className="button nav_btn">
            My Travels
          </button>
        </li>
        <li>
          <button onClick={navMyFriendsHandler} className="button nav_btn">
            My Friends
          </button>
        </li>
      </ul>
      <div>
        <a href="/profile/edit" className="button primary">
          Edit profile
        </a>

        {/* <a href="/travels/new" className="button primary">
          Create new travel
        </a> */}

        {/* <a href="/travels/new" className="button primary">
          Find new friends
        </a> */}
      </div>
    </div>
  )
}

export default Navbar
