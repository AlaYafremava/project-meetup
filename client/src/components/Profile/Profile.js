import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import UserAbout from '../UserAbout/UserAbout'
import UserCard from '../UserCard/UserCard'
import UserFriends from '../UserFriends/UserFriends'
import UserTravels from '../UserTravels/UserTravels'
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs'

function Profile(props) {
  const user = useSelector(store => store.user.user)
  // const langs = useSelector(store => store.user.user.languages.filter(lang => lang.check))
  const langs = user?.languages.filter(lang => lang.check)
  // console.log(langs);
  // const tags = useSelector(store => store.user.user.tags.filter(tag => tag.check))
  const tags = user?.languages.filter(tags => tags.check)
  // console.log(tags);

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
      <Header navAboutHandler={navAboutHandler} />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCard user={user}/>
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
              {stateAbout ? <UserAbout user={user} langs={langs} tags={tags}/> : null}
              {stateMyTravels ? <UserTravels user={user} /> : null}
              {stateMyFriends ? <UserFriends user={user}/> : null}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile
