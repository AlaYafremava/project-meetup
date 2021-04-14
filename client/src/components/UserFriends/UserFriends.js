import React from 'react'
import './UserFriends.css'

const user = {}

function UserFriends(props) {
  return (
    <section>
      <div className="card-friend">
        <div>
          <img src="avatar.jpeg" alt="avatar" className="avatar-friend" />
        </div>
        <div className="title-friend">
          <p>
            <i>Alex Ponibrashin</i>
          </p>
        </div>
        <div className="title-friend">
          <p>
            <i>RUSSIAN FEDERATION</i>
          </p>
        </div>
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
      <div className="card-friend">
        <div>
          <img src="avatar.jpeg" alt="avatar" className="avatar-friend" />
        </div>
        <div className="title-friend">
          <p>
            <i>Alla Yefremova</i>
          </p>
        </div>
        <div className="title-friend">
          <p>
            <i>BELARUS</i>
          </p>
        </div>
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

      <div className="card-friend">
        <div>
          <img src="avatar.jpeg" alt="avatar" className="avatar-friend" />
        </div>
        <div className="title-friend">
          <p>
            <i>Ivan Vorotov</i>
          </p>
        </div>
        <div className="title-friend">
          <p>
            <i>RUSSIAN FEDERATION</i>
          </p>
        </div>
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
    </section>
  )
}

export default UserFriends
