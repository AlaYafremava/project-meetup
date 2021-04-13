import React, { useEffect, useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header';

import { useDispatch, useSelector } from 'react-redux';
import { fetchInitUser } from '../../redux/reduxThunk/asyncFuncs';
// import module from './Hangouts.module.scss';

function Hangouts() {

  useEffect(() => {
    dispatch(fetchInitUser())
  }, []);

  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  let visCheck = useRef();
  console.log(user);

  const changeVisibility = (event) => {
    navigator.geolocation.getCurrentPosition(res =>
      dispatch({
        type: 'MY_COORDS', payload: {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
          time: new Date(),
        }
      }))
      // console.log(res.coords.latitude))
    dispatch({ type: 'CHANGE_VISIBILITY_USER', payload: event.target.checked })
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
                  <label for="slideThree"></label>
                </div> */}
                <input type="checkbox" id="demo-copy" name="demo-copy"
                  ref={visCheck}
                  onChange={changeVisibility} />
                <label htmlFor="demo-copy">Become available for others</label>
              </div>
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
