import React from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'
import './Hangouts.css'

function Hangouts(props) {
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall />
            </div>
            <div className="col-9 col-12-small">
              <div>
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Become available for others</label>
              </div>
              <Map />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hangouts
