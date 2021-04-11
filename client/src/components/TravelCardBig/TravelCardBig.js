import React from 'react'
import './TravelCardBig.css'

function TravelCardBig(props) {
  return (
    <>
      <article className="post featured">
        <header className="major">
          <span className="date">April 25, 2017</span>
          <h2>
            <a href="/travels/:id">And this is a massive headline</a>
          </h2>
        </header>
        <a href="/travels/:id" className="image main">
          <img src="pic01.jpg" alt="picture" />
        </a>
      </article>
      <article className="post featured">
        <header className="major">
          <span className="date">April 25, 2017</span>
          <h2>
            <a href="/travels/:id">And this is a massive headline</a>
          </h2>
        </header>
        <a href="/travels/:id" className="image main">
          <img src="pic01.jpg" alt="picture" />
        </a>
      </article>
    </>
  )
}

export default TravelCardBig
