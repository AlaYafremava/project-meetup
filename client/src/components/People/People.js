import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import { fetchInitPeople } from '../../redux/reduxThunk/asyncFuncs'
import PeopleCard from '../PeopleCard/PeopleCard'

function People(props) {

  const dispatch = useDispatch()

  const {people} = useSelector(state => state.people)
  const user = useSelector(store => store.user.user)



  useEffect(() => {
    dispatch(fetchInitPeople())
  }, [dispatch])

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall user={user}/>
            </div>
            <div className="col-9 col-12-small">
              {people.map(el => <PeopleCard id={el._id} key={el._id} person={el}/>)}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default People
