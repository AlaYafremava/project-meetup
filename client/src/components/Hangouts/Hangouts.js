import React, { useEffect } from 'react'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import Map from '../Map/Map'
import Header from '../Header/Header'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchChangeVisibleEserAC,
  fetchInitUser,
  fetchinitVisibleMarksAC,
  fetchSetCoordsAC,
} from '../../redux/reduxThunk/asyncFuncs'

import './Hangouts.css'
import {
  changeVisiblesUserAC,
  initVisibleMarksAC,
  setCoordsAC,
} from '../../redux/actionCreators/actionCreators'

function Hangouts() {
  // функция текущее определения координат

  const autoCoord = () => {
    navigator.geolocation.getCurrentPosition(res => dispatch(fetchSetCoordsAC(res, user?._id)))
  }

  const { user } = useSelector(store => store.user)
  const { coords, markers, previosCoords } = useSelector(store => store.map)
  // console.log(coords?.user); // ???
  // console.log(user, user);
  // console.log(markers, 'markers');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitUser())
  }, [dispatch])

  // формирорвание markers
  useEffect(() => {
    fetchinitVisibleMarksAC(markers, user?._id)
  }, [])

  // console.log(coords?.user?._id, 'coords.user._id');
  // console.log(user._id, 'user._id');
  // console.log(user?.visibility, coords?.user?._id != user._id, 'выполнение условия на добавление координат');
  // console.log(user?.visibility && coords?.user?._id != user._id ? 'true' : 'false', 'выполнение условия на добавление координат');

  // добавление текущего пользователя
  console.log(previosCoords, 'previosCoords')
  console.log(previosCoords?.user._id, 'previosCoords?.user._id')
  console.log(previosCoords?.user._id != user._id, 'previosCoords?.user._id != user._id')
  useEffect(
    () =>
      user?.visibility && //если отображаем маркеры на карте
      previosCoords?.user._id != user._id // если маркера не было создать новый, если был оставляем старый
        ? autoCoord()
        : dispatch(setCoordsAC(previosCoords)),
    [user?.visibility]
  )

  // запомнить значение checkBox
  const verChecked = event => {
    return user?.visibility && 'default'
  }

  // запись в базу изменения свойства visibility
  const changeVisibility = event => {
    dispatch(fetchChangeVisibleEserAC(user._id, event.target.checked))
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
                <input
                  type="checkbox"
                  id="demo-map"
                  name="demo-map"
                  defaultChecked={verChecked()}
                  onChange={changeVisibility}
                />
                <label htmlFor="demo-map">Become available for others</label>
              </div>
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
