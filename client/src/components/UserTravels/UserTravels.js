import React from 'react'
import TravelCard from '../TravelCard/TravelCard'
import './UserTravels.css'

function UserTravels(props) {
  return (
    <div id="main">
      <h2 className="title-h2-travels">Travels planned by me</h2>
      <section className="posts">
        <TravelCard />
      </section>
      <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div>

      <h2 className="title-h2-travels">Future travels</h2>
      <section className="posts">
        <TravelCard />
      </section>
      <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div>

      <h2 className="title-h2-travels">Past travels</h2>
      <section className="posts">
        <TravelCard />
      </section>
      <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserTravels
