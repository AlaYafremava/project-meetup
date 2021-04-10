import React from 'react'
import TravelsList from '../TravelsList/TravelsList'

function UserTravels(props) {
  return (
    <div id="main">
      <h2 style={{ color: '#18bfef', textAlign: 'center' }}>Travels planned by me</h2>
      <section className="posts">
        <TravelsList />
      </section>
      <div style={{ display: 'block' }}>
        <ul className="actions">
          <li>
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div>

      <h2 style={{ color: '#18bfef', textAlign: 'center' }}>Future travels</h2>
      <section className="posts">
        <TravelsList />
      </section>

      <h2 style={{ color: '#18bfef', textAlign: 'center' }}>Past travels</h2>
      <section className="posts">
        <TravelsList />
      </section>
    </div>
  )
}

export default UserTravels
