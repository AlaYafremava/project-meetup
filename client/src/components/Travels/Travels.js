import React from 'react'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import TravelCardBig from '../TravelCardBig/TravelCardBig'

function Travels(props) {
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
              <div id="main">
                <TravelCardBig />
              </div>
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
          </div>
        </section>
      </div>
    </>
  )
}

export default Travels
