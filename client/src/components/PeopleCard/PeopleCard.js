import React from 'react'
import './PeopleCard.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAddFriend, fetchRemoveFriend } from '../../redux/reduxThunk/asyncFuncs'

function PeopleCard({ person, user }) {
  const dispatch = useDispatch()
 
  const addFriendHandler = () => {
    dispatch(fetchAddFriend(user._id, person._id))
  }

  const removeFriendHandler = () => {
    dispatch(fetchRemoveFriend(user._id, person._id))
  }

  return (
    <div className="card-people">
      <Link to={person._id === user._id ? `/profile` : `/people/${person._id}`}>
        <div>
          <img
            src={person.avatar ? person.avatar : 'avatar.jpeg '}
            alt="avatar"
            className="avatar-people"
          />
        </div>
      </Link>
      <Link to={person._id === user._id ? `/profile` : `/people/${person._id}`}>
        <div className="title-people">
          <p>
            <i>
              <b>{person.name + ' ' + person.surname}</b>
            </i>
          </p>
        </div>
      </Link>
      <Link to={person._id === user._id ? `/profile` : `/people/${person._id}`}>
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
      <div>
        {user.friends.find(friend => friend._id === person._id) ? (
          <button onClick={removeFriendHandler} className="button">
            Remove
          </button>
        ) : (
          <button onClick={addFriendHandler} className="button primary">
            Add friend
          </button>
        )}
      </div>
    </div>
  )
}

export default PeopleCard
