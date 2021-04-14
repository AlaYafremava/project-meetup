import React from 'react'
import './PeopleCard.css'
import { Link } from 'react-router-dom'

const user = {}

function PeopleCard({ person }) {
  return (
    <div className="card-people" >
      <Link to={`/people/${person._id}`}>
        <div>
          <img
            src={person.avatar ? person.avatar : 'avatar.jpeg '}
            alt="avatar"
            className="avatar-people"
          />
        </div>
      </Link>
      <Link to={`/people/${person._id}`}>
        <div className="title-people">
          <p>
            <i>{person.name + ' ' + person.surname}</i>
          </p>
        </div>
      </Link>
      <Link to={`/people/${person._id}`}>
        <div className="title-people">
          <p>
            <i>{person.country ? person.country : 'Country not specified'}</i>
          </p>
        </div>
      </Link>

      <ul className="icons alt last-icons">
        <li>
          {person.telegram && (
            <a href={person.telegram} className="icon brands alt fa-telegram">
              <span className="label">Telegram</span>
            </a>
          )}
        </li>
        <li>
          {person.facebook && (
            <a href={person.facebook} className="icon brands alt fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          )}
        </li>
        <li>
          {person.instagram && (
            <a href={person.instagram} className="icon brands alt fa-instagram">
              <span className="label">Instagram</span>
            </a>
          )}
        </li>
      </ul>
    </div>
  )
}

export default PeopleCard
