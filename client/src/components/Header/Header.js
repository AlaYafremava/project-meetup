import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAC } from '../../redux/actionCreators/actionCreators'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({navAboutHandler}) {
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
            <a href="/hangouts" className="logo">
              Meetup
            </a>
          </div>
          <ul className="links headersLinks">
            <li>
              <Link to="/hangouts" className="links">
                Hangouts
              </Link>
            </li>
            <li>
              <Link to="/travels">Travels</Link>
            </li>
            <li>
              <Link to="/profile" onClick={navAboutHandler}>My Profile</Link>
            </li>

            <li className="active">
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
