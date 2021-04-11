import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Header.css'
import { LOGOUT } from '../../redux/actionTypes/actionTypes'

function Header(props) {
const dispatch = useDispatch()
const logOutHandler = () => {
  dispatch(LOGOUT)
}

  return (
    <header id="header">
      <nav id="nav">
        <div className="linkLogo">
          <a href="/hangouts" className="logo">

            Meetup
          </a>
        </div>
        <ul className="links headersLinks">
          <li>

            <a href="/hangouts" className="links">Hangouts</a>
          </li>
          <li>
            <a href="/travels">Travels</a>
          </li>
          <li>
            <a href="/profile">My Profile</a>
          </li>

          <li /*className="active"*/>
            <a href="/logout" onClick={logOutHandler}>LogOut</a>

          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
