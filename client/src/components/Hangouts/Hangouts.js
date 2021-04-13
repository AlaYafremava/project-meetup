import React, { useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux'
import './Hangouts.css'
import MapSwitch from '../MapSwitch/MapSwitch'

function Hangouts() {
  // const { visibility } = useSelector(store => store.profile)
  // const dispatch = useDispatch()

  // const visCheck = useRef()

  // const changeVisibility = event => {
  //   // dispatch({ type: 'CHANGE_VISIBILITY', payload: visibility })}
  //   const checked = event.target.checked
  //   // visCheck.current.value = checked;
  //   console.log(checked)
  // }

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
              <h2>Become available</h2>
              <MapSwitch />
              <Map />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hangouts
