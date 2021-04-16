import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({
  navAboutHandler,
  navMyTravelsHandler,
  navMyFriendsHandler,
  stateAbout,
  stateMyTravels,
  stateMyFriends,
  otherPeople,
}) {
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
            {otherPeople ? 'Travels' : 'My Travels'}
          </button>
        </li>
        <li>
          <button onClick={navMyFriendsHandler} className="button nav_btn">
            {otherPeople ? 'Friends' : 'My Friends'}
          </button>
        </li>
      </ul>
      <div>
        {stateAbout && !otherPeople ? (
          <Link to="/profile/edit" className="button primary">
            Edit profile
          </Link>
        ) : null}

        {stateMyTravels && !otherPeople ? (
          <Link to="/travels/new" className="button primary">
            Create new travel
          </Link>
        ) : null}

        {stateMyFriends && !otherPeople ? (
          <Link to="/people" className="button primary">
            Find new friends
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
