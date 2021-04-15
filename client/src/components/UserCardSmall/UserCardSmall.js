import React from 'react'
import '../UserCard/UserCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserCardSmall({ user }) {
  return (
    <div className="card">
      <img src={user?.avatar ? user?.avatar : "avatar.jpeg"} alt="avatar" className="avatar" />
      <a href="/profile">
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
      </a>
    </div>
  )
}

export default UserCardSmall
