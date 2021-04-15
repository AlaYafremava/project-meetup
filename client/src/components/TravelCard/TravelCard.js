import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchInitTravels } from '../../redux/reduxThunk/asyncFuncs'
import './TravelCard.css'

function TravelCard({ idTravel }) {
  // const store = useSelector(store => store)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchInitTravels())
  // })
  // const store = useSelector(store => store)

  const  {travels}  = useSelector(store => store.travels)

  const [travel] = travels.filter(el => el._id === idTravel)

  return (
    <article>
      <header>
        <span className="date">{travel?.startDate?.slice(0,10)} 	&#160; ~ 	&#160; {travel?.finishDate?.slice(0,10)}</span>
        <h3 className="title-travels">
          <Link to={`/travels/${idTravel}`}>{travel?.title}</Link>
        </h3>
      </header>
      <Link to={`/travels/${idTravel}`} className="image fit">
        <img src={travel?.src} alt="picture" />
      </Link>
    </article>
  )
}

export default TravelCard
