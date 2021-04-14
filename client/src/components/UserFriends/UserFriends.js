import React from 'react'
import './UserFriends.css'

function UserFriends({ user }) {
  return (
    <section>
      {user.friends ? (
        user.friends.map(friend => {
          return (
            <div className="card-friend">
              <div>
                <img src="avatar.jpeg" alt="avatar" className="avatar-friend" />
              </div>
              <div className="title-friend">
                <p>
                  <i>{friend.name + ' ' + friend.surname}</i>
                </p>
              </div>
              <div className="title-friend">
                <p>
                  <i>{friend.country}</i>
                </p>
              </div>
              <ul className="icons alt">
                <li>
                  <a href={friend.telegram} className="icon brands alt fa-telegram">
                    <span className="label">Telegram</span>
                  </a>
                </li>
                <li>
                  <a href={friend.facebook} className="icon brands alt fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href={friend.instagram} className="icon brands alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          )
        })
      ) : (
        <h3>Add some friends!</h3>
      )}
    </section>
  )
}

export default UserFriends
