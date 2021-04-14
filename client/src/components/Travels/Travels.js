import React, { useEffect } from 'react'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import TravelCardBig from '../TravelCardBig/TravelCardBig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTravels } from "../../redux/reduxThunk/asyncFuncs"

function Travels(props) {

  const dispatch = useDispatch()
  const store = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchInitTravels())
  }, [dispatch])

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
                {store.travels?.travels?.map(el => <TravelCardBig key={performance.now()} el={el} />)}
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
