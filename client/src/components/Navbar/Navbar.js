import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ navAboutHandler, navMyTravelsHandler, navMyFriendsHandler,stateAbout,stateMyTravels,stateMyFriends }) {
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

        {stateAbout ? (
          <a href="/profile/edit" className="button primary">
            Edit profile
          </a>
        ) : null}

        {stateMyTravels ? (
          <a href="/travels/new" className="button primary">
          Create new travel
        </a>
        ) : null}

        {stateMyFriends ? (
          <a href="/hangouts" className="button primary">
          Find new friends
        </a>
        ) : null}

      </div>
    </div>
  )
}

export default Navbar
