import React from 'react'
import TravelCard from '../TravelCard/TravelCard'
import './UserTravels.css'

function UserTravels({ user }) {
  return (
    <div id="main">
      <h2 className="title-h2-travels">Travels planned by me</h2>
      {user.userTravels.length < 1 && (
        <h4>
          You dont have any plans for travelling :( <br /> Let's do it!
        </h4>
      )}
      <section className="posts">
        {user?.userTravels.map(el => (
          <TravelCard key={performance.now()} el={el} />
        ))}
      </section>
      {/* <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div> */}

      <h2 className="title-h2-travels">Future travels</h2>
      {user.futureTravels.length < 1 && (
        <h4>
          You dont have any plans for travelling :( <br /> Join to someone!
        </h4>
      )}
      <section className="posts">
        {user?.userTravels.map(el => (
          <TravelCard key={performance.now()} el={el} />
        ))}
      </section>
      {/* <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div> */}

      <h2 className="title-h2-travels">Past travels</h2>
      {user.pastTravels.length < 1 && (
        <h4>
          You did not travel with us:( <br /> Let's do it!
        </h4>
      )}
      <section className="posts">
        {user?.userTravels.map(el => (
          <TravelCard key={performance.now()} el={el} />
        ))}
      </section>
      {/* <div>
        <ul className="actions">
          <li className="li-travels">
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default UserTravels
