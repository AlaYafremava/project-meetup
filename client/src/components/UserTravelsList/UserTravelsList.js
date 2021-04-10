import React from 'react'
import './UserTravelsList.css'

function UserTravelsOwn(props) {
  return (
    <div id="main">
      <h3>Travels planned by me</h3>
      <section className="posts">
        <article>
          <header>
            <span className="date">April 24, 2017</span>
            <h2 className="title-travels">
              <a href="/profile/:id">Sed magna ipsum faucibus</a>
            </h2>
          </header>
          <a href="/profile/:id" className="image fit">
            <img src="pic01.jpg" alt="" />
          </a>
        </article>
        <article>
          <header>
            <span className="date">April 24, 2017</span>
            <h2 className="title-travels">
              <a href="/profile/:id">Sed magna ipsum faucibus</a>
            </h2>
          </header>
          <a href="/profile/:id" className="image fit">
            <img src="pic01.jpg" alt="" />
          </a>
        </article>
        <article>
          <header>
            <span className="date">April 24, 2017</span>
            <h2 className="title-travels">
              <a href="/profile/:id">Sed magna ipsum faucibus</a>
            </h2>
          </header>
          <a href="/profile/:id" className="image fit">
            <img src="pic01.jpg" alt="" />
          </a>
        </article>
        <article>
          <header>
            <span className="date">April 24, 2017</span>
            <h2 className="title-travels">
              <a href="/profile/:id">Sed magna ipsum faucibus</a>
            </h2>
          </header>
          <a href="/profile/:id" className="image fit">
            <img src="pic01.jpg" alt="" />
          </a>
        </article>
      </section>
    </div>
  )
}

export default UserTravelsOwn
