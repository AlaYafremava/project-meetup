import React, { useEffect, useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs'

import './Hangouts.css'
import MapSwitch from '../MapSwitch/MapSwitch'

function Hangouts() {

  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitUser())
  }, [dispatch]);

  // let visCheck = useRef();
  console.log(user.visibility);

  const verChecked = (event) => {
    return user.visibility && 'default'
  }

  const changeVisibility = (event) => {
    // запись в базу изменений
    fetch('/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: user._id, visibility: event.target.checked })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'CHANGE_VISIBILITY_USER', payload: data.visibility }))

    // текущее положение в координаты
    navigator.geolocation.getCurrentPosition(res =>
      fetch('/map/new-coords', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          coords: {
            lat: res.coords.latitude,
            lng: res.coords.longitude,
          },
          userId: user._id,
        }),
      })
        .then(res => res.json())
        .then(data => dispatch({
          type: 'MY_COORDS', payload: {
            lat: res.coords.latitude,
            lng: res.coords.longitude,
            id: data._id
          }
        })
        )
    )

    // dispatch({ type: 'CHANGE_VISIBILITY_USER', payload: event.target.checked })
  }

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
                {/* слайдер */}
                {/* <div class="slideThree">
                  <input type="checkbox" value="None" id="slideThree" name="check" checked />
                  <label htmlFor="slideThree"></label>
                </div> */}
                <input type="checkbox" id="demo-copy" name="demo-copy"
                  // ref={visCheck}
                  defaultChecked={verChecked()}
                  onChange={changeVisibility}
                />
                <label htmlFor="demo-copy">Become available for others</label>
              </div>
              <h2>Become available</h2>
              <MapSwitch />
              <div>
                <Map visibility={user.visibility} />
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hangouts
