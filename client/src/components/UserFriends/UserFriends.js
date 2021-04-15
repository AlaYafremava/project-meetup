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

  // const dispatch = useDispatch()

  // const removeFriendHandler = friendId => {
  //   dispatch(fetchRemoveFriend(user._id, friendId))
  // }
  return (
    <section>
      <h2 className="title-h2-travels">Your friends in MEETUP</h2>
      {user.friends.length < 1 && (
        <h4>
          You dont have here any friends for travelling yet:( <br /> Find them!
        </h4>
      )}
      {user?.friends ? (
        unique(user.friends).map(id => {
          const [friend] = people.filter(el => el._id === id)
          return (
            <div className="card-people">
              <Link to={friend._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div>
                  <img
                    src={friend.avatar ? friend.avatar : 'avatar.jpeg '}
                    alt="avatar"
                    className="avatar-people"
                  />
                </div>
              </Link>
              <Link to={friend._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div className="title-people">
                  <p>
                    <i>
                      <b>{friend.name + ' ' + friend.surname}</b>
                    </i>
                  </p>
                </div>
              </Link>
              <Link to={friend._id === user._id ? `/profile` : `/people/${friend._id}`}>
                <div className="title-people">
                  <p>
                    <i>{friend.country ? friend.country : 'Country not specified'}</i>
                  </p>
                </div>
              </Link>

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
              {/* <div>
                <button onClick={removeFriendHandler} className="button">
                  Remove
                </button>
              </div> */}
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
