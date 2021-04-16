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
import { useParams } from 'react-router'

function PeoplePage(props) {
  const { id } = useParams()
  const otherPeople = true
  const { people } = useSelector(state => state.people)
  const [user] = people.filter(el => (el._id === id ? el : undefined))
  console.log(user)

  const langs = user?.languages?.filter(lang => lang.check)
  // console.log(langs);
  const tags = user?.tags?.filter(tags => tags.check)
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
              <UserCard user={user} />
            </div>
            <div className="col-9 col-12-small">
              <Navbar
                otherPeople={otherPeople}
                navAboutHandler={navAboutHandler}
                stateAbout={stateAbout}
                navMyTravelsHandler={navMyTravelsHandler}
                stateMyTravels={stateMyTravels}
                navMyFriendsHandler={navMyFriendsHandler}
                stateMyFriends={stateMyFriends}
              />
              {stateAbout ? <UserAbout user={user} langs={langs} tags={tags} /> : null}
              {stateMyTravels ? <UserTravels user={user} /> : null}
              {stateMyFriends ? <UserFriends user={user} /> : null}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PeoplePage
