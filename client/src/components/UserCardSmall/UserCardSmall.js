import React from 'react'
import '../UserCard/UserCard.css'
import { Link } from 'react-router-dom'

function UserCardSmall({ user }) {
  return (
    <div className="card">

      <img src={user?.avatar ? user.avatar : 'avatar.jpeg'} alt="avatar" className="avatar" />
      <Link to="/profile">
        <p className="userName">
          <i>{user?.name + ' ' + user?.surname}</i>
        </p>
        <p className="title">
          <i>
            {user?.city}
            {user?.city && ','} <br />
            {user?.country}
          </i>
        </p>
      </Link>
    </div>
  )
}

export default UserCardSmall
