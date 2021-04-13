import React from 'react'
import '../UserCard/UserCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserCardSmall(props) {
  const dispatch = useDispatch()

  const user = useSelector(store => store.user.user)

  // console.log(user)
  return (
    <div className="card">
      <img src="avatar.jpeg" alt="avatar" className="avatar" />
      <a href="/profile">
        <p className="userName">
          <i>Alla Yefremova</i>
        </p>
        <p className="title">
          <i>
            Saint-Petersburg, <br />
            Russian Federation
          </i>
        </p>
      </a>
    </div>
  )
}

export default UserCardSmall
