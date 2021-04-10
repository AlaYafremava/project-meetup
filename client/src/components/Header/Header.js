import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'
import { LOGOUT } from '../../redux/actionTypes/actionTypes'

function Header(props) {
const dispatch = useDispatch()
const LogOutHandler = () => {
  dispatch(LOGOUT)
}

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
            <Link onClick={LogOutHandler} to="/logout">LogOut</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
