import React, { useEffect, useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs'

import './Hangouts.css'
// import MapSwitch from '../MapSwitch/MapSwitch'

function Hangouts() {

  // функция текущее определения координат

  const autoCoord = () => {
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
          type: 'MY_COORDS', payload:
            data
        }))
    )
  }

  const { user } = useSelector(store => store.user);
  const { coords, markers } = useSelector(store => store.map);
  // console.log(coords?.user); // ???
  // console.log(user, user);
  // console.log(markers, 'markers');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitUser())
  }, [dispatch])

  // формирорвание markers
  useEffect(() => {
    fetch('/map')
      .then(res => res.json())

      .then(markers => dispatch({
        type: 'INIT_VISIBLES_MARKS', payload: { markers, currentUserId: user._id }
      }))

    // (el) => (el.userId.visibility && !user._id) el.coords
  }, [])

  // console.log(coords._id);
  // console.log(user?.visibility);
  // console.log(coords?.user?._id, 'coords.user._id');
  // console.log(user._id, 'user._id');
  // добавление маркера на текущее местоположение
  useEffect(() => user?.visibility && coords?.user?._id != user._id && autoCoord(), [user?.visibility]); //???


  // console.log(coords._id);
  // console.log(!coords._id);
  // добавление маркера на текущее местоположение
  useEffect(() => user?.visibility && !coords?._id && autoCoord(), []) //???

  // console.log(user?.visibility);

  const verChecked = event => {
    return user?.visibility && 'default'
  }

  // запись в базу изменения свойства visibility
  const changeVisibility = (event) => {
    fetch('/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: user._id, visibility: event.target.checked })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'CHANGE_VISIBILITY_USER', payload: data.visibility }))

    // задать текущее положение в координаты

    // console.log(user?.visibility);
    // user?.visibility && autoCoord()

  }
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall user={user} />
            </div>
            <div className="col-9 col-12-small">


              <div>
                <h2>Let's hangout with someone</h2>
                {/* слайдер */}
                {/* <div class="slideThree">
                  <input type="checkbox" value="None" id="slideThree" name="check" checked />
                  <label htmlFor="slideThree"></label>
                </div> */}
                <input type="checkbox" id="demo-map" name="demo-map"

                  // ref={visCheck}
                  defaultChecked={verChecked()}
                  onChange={changeVisibility}
                />
                <label htmlFor="demo-map">Become available for others</label>
              </div>
              {/* <MapSwitch /> */}
              <div>
                <Map visibility={user?.visibility} />
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hangouts
