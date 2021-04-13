import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import UserAbout from '../UserAbout/UserAbout'
import UserCard from '../UserCard/UserCard'
import UserFriends from '../UserFriends/UserFriends'
import UserTravels from '../UserTravels/UserTravels'
import {fetchInitUser} from '../../redux/reduxThunk/asyncFuncs'

function Profile(props) {
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(fetchInitUser())
  }, [dispatch])
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCard />
            </div>
            <div className="col-9 col-12-small">
              <Navbar />
              {/* <UserAbout /> */}
              <UserTravels />
              {/* <UserFriends /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile
