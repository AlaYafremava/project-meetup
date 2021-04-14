import React from 'react'
import './TravelCardBig.css'

function TravelCardBig({el}) {
  return (
    <>
      <article className="post featured">
        <header className="major">
          <span className="date"> {el.startDate?.slice(0,10)} 	&#160; ~ 	&#160; {el.finishDate?.slice(0,10)}</span>
          <h2>
            <a href={`/travels/${el._id}`}>{el.title}</a>
          </h2>
        </header>
        <a href={`/travels/${el._id}`} className="image main">
          <img src={el.src} alt="picture" />
        </a>
      </article>
 
    </>
  )
}

export default TravelCardBig
