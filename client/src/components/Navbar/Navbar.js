import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <ul className="actions">
        <li>
          <a href="/profile" class="button">
            About
          </a>
        </li>
        <li>
          <a href="#" class="button">
          My Travels
          </a>
        </li>
        <li>
          <a href="/profile/myfriends" class="button">
          My Friends
          </a>
        </li>
      </ul>
      <ul className="links" style={{ marginRight: '0' }}>
        <li style={{listStyleType: 'none'}}>
          <a href="/profile" className="button primary">
            Edit profile
          </a>
        </li>
      </ul>
    </div>
    // <nav id="navbar" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    //   <ul className="links">
    //     <li>
    //       <Link to="/profile">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile/mytravels">My Travels</Link>
    //     </li>
    //     <li className="active">
    //       <Link to="/profile/myfriends">My Friends</Link>
    //     </li>
    //   </ul>
    //   <ul className="links" style={{marginRight: '0'}}>
    //     <li>
    //       <Link to="/profile" className="button primary">
    //         Edit profile
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar
