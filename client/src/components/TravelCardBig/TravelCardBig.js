import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './TravelCardBig.css'

function TravelCardBig({el}) {
  const store = useSelector(store => store)
  const userId = store.user.user._id

  return (
    <>
      <article className="post featured">
        <header className="major">
          <span className="date"> {el.startDate?.slice(0,10)} 	&#160; ~ 	&#160; {el.finishDate?.slice(0,10)}</span>
          <h2>
            <Link to={`/travels/${el._id}`}>{el.title}</Link>
          </h2>
        </header>
       <Link to={`/travels/${el._id}`} className="image main">
          <img src={el.src} alt="picture" />
        </Link>
      </article>
 
    </>
  )
}

export default TravelCardBig
