import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
          <a href={`/travels/${idTravel}`}>{travel?.title}</a>
        </h3>
      </header>
      <a href={`/travels/${idTravel}`} className="image fit">
        <img src={travel?.src} alt="picture" />
      </a>
    </article>
  )
}

export default TravelCard
