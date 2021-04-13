import React, { useRef } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux';
import module from './Hangouts.module.scss';

function Hangouts() {

  const { visibility } = useSelector(store => store.profile);
  const dispatch = useDispatch();

  const visCheck = useRef();

const changeVisibility = (event) => {
  // dispatch({ type: 'CHANGE_VISIBILITY', payload: visibility })}
  const checked = event.target.checked;
  // visCheck.current.value = checked;
  console.log(checked);
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
                <div class="slideThree">
                  <input type="checkbox" value="None" id="slideThree" name="check" checked />
                  <label for="slideThree"></label>
                </div>
                {/* <input type="checkbox" id="demo-copy" name="demo-copy" 
                ref="visCheck"
                onChange={changeVisibility} />
                <label htmlFor="demo-copy">Become available for others</label> */}
              </div>
              <div>
                <Map />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hangouts
