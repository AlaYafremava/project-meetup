import React from 'react'
import './UserCard.css'
import { useSelector } from 'react-redux'

function UserCard(props) {
  
  const user = useSelector(store => store.user.user)
  // console.log(user)

  return (
    <div className="card">
      <img src={user.avatar} alt="avatar" className="avatar" />
      <p className="userName">
        <i>{user.name} {user.surname}</i>
      </p>
      <p className="title">
        <i>
          {user.city}{user.city && ','} <br />
          {user.country}
        </i>
      </p>
      <hr />
      <ul className="icons alt">
        <li>
          <a href={user.telegram} className="icon brands alt fa-telegram">
            <span className="label">Telegram</span>
          </a>
        </li>
        <li>
          <a href={user.facebook} className="icon brands alt fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href={user.instagram} className="icon brands alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default UserCard
