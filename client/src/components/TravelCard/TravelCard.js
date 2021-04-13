import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTravels } from '../../redux/reduxThunk/asyncFuncs'
import './TravelCard.css'

function TravelCard(props) {
  const store = useSelector(store => store)
  // const [travels] = store.travels.travels.filter(travel => travel._id === id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchInitTravels())
  })
  return (
    <>
      <article>
        <header>
          <span className="date">April 24, 2017</span>
          <h3 className="title-travels">
            <a href="/profile/:id">Sed magna ipsum ipsum ipsum ipsum faucibus</a>
          </h3>
        </header>
        <a href="/profile/:id" className="image fit">
          <img src="pic01.jpg" alt="" />
        </a>
      </article>
    </>
  )
}

export default TravelCard
