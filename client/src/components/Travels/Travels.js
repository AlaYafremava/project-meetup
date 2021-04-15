import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import TravelCardBig from '../TravelCardBig/TravelCardBig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTravels } from '../../redux/reduxThunk/asyncFuncs'

function Travels(props) {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const user = useSelector(store => store.user.user)


  useEffect(() => {
    dispatch(fetchInitTravels())
  }, [])

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall user={user}/>
            </div>
            <div className="col-9 col-12-small">
              <h2>All plans for travelling from meetupers</h2>
              {store.travels?.travels.length < 1 && (
                <h4>
                  There are not any plans yet... <br /> Be first! Add some adventure!
                </h4>
              )}
              <a href="/travels/new" className="button primary">
                Create new travel
              </a>
              <div id="main">
                {store.travels?.travels ? (
                  store.travels?.travels?.map(el => (
                    <TravelCardBig key={performance.now()} el={el} />
                  ))
                ) : (
                  <h2>No any travels yet :(</h2>
                )}
              </div>
              {/* <div>
                <ul className="actions">
                  <li className="li-travels">
                    <a href="/#" className="button icon solid solo fa-arrow-down scrolly">
                      Continue
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Travels
