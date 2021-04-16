import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { fetchAddFriend, fetchRemoveFriend } from '../../redux/reduxThunk/asyncFuncs'

import './UserFriends.css'

function UserFriends({ user }) {
  const { people } = useSelector(state => state.people)

  function unique(arr) {
    let result = []

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str)
      }
    }
    return result
  }
  return (
    <section>
      <h2 className="title-h2-travels">Friends in MEETUP</h2>
      {user?.friends?.length < 1 && <h4>There are not any friends for travelling yet:(</h4>}
      {user?.friends ? (
        unique(user.friends).map(id => {
          const [friend] = people.filter(el => el._id === id)
          return (
            <div className="card-people">
              <Link to={friend?._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div>
                  <img
                    src={friend?.avatar ? friend.avatar : 'avatar.jpeg '}
                    alt="avatar"
                    className="avatar-people"
                  />
                </div>
              </Link>
              <Link to={friend?._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div className="title-people">
                  <p>
                    <i>
                      <b>{friend.name}</b>
                    </i>
                  </p>
                </div>
              </Link>
              {/* <a href={friend._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div className="title-people">
                  <p>
                    <i>{friend.country ? friend.country : 'Country not specified'}</i>
                  </p>
                </div>
              </a> */}

              <ul className="icons alt last-icons">
                <li>
                  {friend.telegram && (
                    <a href={friend.telegram} className="icon brands alt fa-telegram">
                      <span className="label">Telegram</span>
                    </a>
                  )}
                </li>
                <li>
                  {friend.facebook && (
                    <a href={friend.facebook} className="icon brands alt fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  )}
                </li>
                <li>
                  {friend.instagram && (
                    <a href={friend.instagram} className="icon brands alt fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  )}
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
