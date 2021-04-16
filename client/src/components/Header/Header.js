import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAC } from '../../redux/actionCreators/actionCreators'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({ navAboutHandler }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const logOutHandler = () => {
    dispatch(logoutAC())
    history.push('/')
  }

  return (
    <>
      <header id="header">
        <nav id="nav">
          <div className="linkLogo">
            <Link to="/hangouts" className="logo">
              Meetup
            </Link>
          </div>
          <ul className="links headersLinks">
            <li className={history.location.pathname === "/hangouts" && 'active'}>
              <Link to="/hangouts">
                Hangouts
              </Link>
            </li>
            <li className={history.location.pathname === "/travels" && 'active'}>
              <Link to="/travels">
                Travels
              </Link>
            </li>
            <li className={history.location.pathname === "/people" && 'active'}>
              <Link to="/people">
                People
              </Link>
            </li>
            <li className={history.location.pathname === "/profile" && 'active'}>
              <Link to="/profile">
                My Profile
              </Link>
            </li>

            <li>
              <Link to="/" onClick={logOutHandler}>
                LogOut
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <button onClick={logOutHandler}>ВЫЙТИИИИИИИИИ</button> */}
    </>
  )
}

export default Header
