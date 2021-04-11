import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAC } from '../../redux/actionCreators/actionCreators'
// import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
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
              {/* <a href="/logout" onClick={logOutHandler}>LogOut</a> */}
            </li>
          </ul>
        </nav>
      </header>
      <button onClick={logOutHandler}>ВЫЙТИИИИИИИИИ</button>
    </>
  )
}

export default Header
