import React from 'react';
import './UserCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

function UserCard(props) {
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  // console.log(user)

  return (
    <div className="card">
      <img src="avatar.jpeg" alt="avatar" className="avatar" />
      <p className="userName">
        <i>Alla Yefremova</i>
      </p>
      <p className="title">
        <i>
          Saint-Petersburg, <br />
          Russian Federation
        </i>
      </p>
      <hr />
      <ul className="icons alt">
        <li>
          <a href="#" className="icon brands alt fa-telegram">
            <span class="label">Telegram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands alt fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands alt fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default UserCard;
