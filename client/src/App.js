import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import store from './redux/store'
import { Provider, useSelector } from 'react-redux'
import Travels from './components/Travels/Travels'
import UserFormEdit from './components/UserFormEdit/UserFormEdit'
import Hangouts from './components/Hangouts/Hangouts'
import TravelPage from './components/TravelPage/TravelPage'
import TravelPageCreate from './components/TravelPageCreate/TravelPageCreate'
import TravelPageEdit from './components/TravelPageEdit/TravelPageEdit'
import Map from './components/Map/Map'
import Header from './components/Header/Header'

function App() {
  const token = window.localStorage.getItem('token')
  
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }, [])

  // const isAuth = useSelector(store => store.user.isAuth)

  return (
    <Provider store={store}>
      <Router>
        {/* <Header/> */}


        <Switch>

          <Route exact path="/">
            <Auth />
          </Route>

          <Route path="/hangouts">
            <Hangouts />
          </Route>

          <Route exact path="/travels">
            <Travels />
          </Route>

          <Route path="/travels/new">
            <TravelPageCreate />
          </Route>

          <Route exact path="/travels/:id">
            <TravelPage />
          </Route>

           <Route path="/map">
              <Map />
            </Route>

         

          <Route path="/travels/:id/edit">
            <TravelPageEdit />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/profile/edit">
            <UserFormEdit />
          </Route>
        </Switch>
      </Router>
      <div id="copyright">
        <ul>
          <li>&copy; MEETUP</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
          <li>
            Created by: <a href="https://github.com/Alla-Yefremova/project-meetup">MEETUP Team</a>
          </li>
        </ul>
      </div>
    </Provider>
  )
}

export default App
