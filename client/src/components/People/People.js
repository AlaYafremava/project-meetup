import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import { fetchInitPeople } from '../../redux/reduxThunk/asyncFuncs'
import PeopleCard from '../PeopleCard/PeopleCard'

function People(props) {
  const dispatch = useDispatch()

  const  allPeople  = useSelector(state => state.people.people)
  const user = useSelector(store => store.user.user)

  // People without me!
  const people = allPeople.filter(el => el._id !== user._id)

  useEffect(() => {
    dispatch(fetchInitPeople())
  }, [])

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall user={user} />
            </div>
            <div className="col-9 col-12-small">
              <h2>All of us are here!</h2>
              <p style={{ textAlign: 'end' }}>
                <i>Friends are the family we were allowed to choose...</i>
              </p>
              {people.length < 1 && (
                <>
                  <h4>'Oups! There are not any members :('</h4>
                </>
              )}
              {people?.map(el => {
                   return <PeopleCard id={el._id} key={el._id} person={el} user={user} />
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default People
