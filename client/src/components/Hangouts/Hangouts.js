import React, { useEffect, useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs'

import './Hangouts.css'
// import MapSwitch from '../MapSwitch/MapSwitch'

function Hangouts() {

  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitUser())
  }, [dispatch]);

  // let visCheck = useRef();
  console.log(user.visibility);

  const verChecked = () => {
    return user.visibility && 'default'
  }

  const changeVisibility = (event) => {
    // запись в базу изменений
    fetch('/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: user._id, visibility: user.visibility })
    })
      .then(res => res.json())
      .then(data => console.log(data))

    navigator.geolocation.getCurrentPosition(res =>
      // фетч на обновление координат
      dispatch({
        type: 'MY_COORDS', payload: {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
          time: new Date(),
        }
      }))

    dispatch({ type: 'CHANGE_VISIBILITY_USER', payload: event.target.checked })
  }

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

              <div>
                <h2>Let's hangout with someone</h2>
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
              {/* <MapSwitch /> */}
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
