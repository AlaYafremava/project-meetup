import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import UserAbout from '../UserAbout/UserAbout'
import UserCard from '../UserCard/UserCard'
import UserFriends from '../UserFriends/UserFriends'
import UserTravels from '../UserTravels/UserTravels'
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs'

function Profile(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitUser())
  }, [dispatch])

  const [stateAbout, stateAboutSet] = useState(true)
  const [stateMyTravels, stateMyTravelsSet] = useState(false)
  const [stateMyFriends, stateMyFriendsSet] = useState(false)

  const navAboutHandler = () => {
    stateMyFriendsSet(false)
    stateMyTravelsSet(false)
    stateAboutSet(true)
  }

  const navMyTravelsHandler = () => {
    stateMyFriendsSet(false)
    stateAboutSet(false)
    stateMyTravelsSet(true)
  }

  const navMyFriendsHandler = () => {
    stateMyTravelsSet(false)
    stateAboutSet(false)
    stateMyFriendsSet(true)
  }

  return (
    <>
      <Header navAboutHandler={navAboutHandler}/>
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCard />
            </div>
            <div className="col-9 col-12-small">
              <Navbar
                navAboutHandler={navAboutHandler}
                stateAbout={stateAbout}
                navMyTravelsHandler={navMyTravelsHandler}
                stateMyTravels={stateMyTravels}
                navMyFriendsHandler={navMyFriendsHandler}
                stateMyFriends={stateMyFriends}
              />
              {stateAbout ? <UserAbout /> : null}
              {stateMyTravels ? <UserTravels /> : null}
              {stateMyFriends ? <UserFriends /> : null}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile
