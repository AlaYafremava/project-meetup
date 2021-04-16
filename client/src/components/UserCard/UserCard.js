import React from 'react'
import { Link } from 'react-router-dom'
import './UserCard.css'

function UserCard({ user }) {

  return (
    <div className="card">

      <img src={user?.avatar ? user?.avatar : "avatar.jpeg"} alt="avatar" className="avatar" />

      <p className="userName">
        <i>{user?.name} {user?.surname}</i>
      </p>
      <p className="title">
        <i>
          {user?.city}{user?.city && ','} <br />
          {user?.country}
        </i>
      </p>
   
      <hr />
      <ul className="icons alt">
        {user.telegram && <li>
          <a href={user?.telegram} className="icon brands alt fa-telegram">
            <span className="label">Telegram</span>
          </a>
        </li>}

        {user.facebook && <li>
          <a href={user?.facebook} className="icon brands alt fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>}
        
        {user.instagram && <li>
          <a href={user?.instagram} className="icon brands alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>}
        
      </ul>
    </div>
  )
}
export default UserCard
