import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTravels } from '../../redux/reduxThunk/asyncFuncs'
import './TravelCard.css'

function TravelCard({el}) {
  console.log(el);
  // const store = useSelector(store => store)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchInitTravels())
  // })
  return (
    <>
      <article>
        <header>
          {/* <span className="date">{el.startDate?.slice(0,10)} 	&#160; ~ 	&#160; {el.finishDate?.slice(0,10)}</span> */}
          <h3 className="title-travels">
            <a href={`/travels/${el?._id}`}>{el?.title}</a>
          </h3>
        </header>
        <a href={`/travels/${el?._id}`} className="image fit">
          <img src={el?.src} alt="" />
        </a>
      </article>
    </>
  )
}

export default TravelCard
