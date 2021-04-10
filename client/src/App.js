import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import Main from './components/Profile/Profile'
import store from './redux/store'
import { Provider, useSelector } from 'react-redux'
import Travels from './components/Travels/Travels'
import FormEdit from './components/FormEdit/FormEdit'
import Hangouts from './components/Hangouts/Hangouts'

function App() {
  const token = window.localStorage.getItem('token')
  useEffect(()=>{
    fetch(process.env.REACT_APP_URL,{
      method: 'GET',
      headers: {
        'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    })
  },[])

  // const isAuth = useSelector(store => store.user.isAuth)

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>

          <Route path="/hangouts">
            <Hangouts />
          </Route>

          <Route path="/travels">
            <Travels />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/profile/edit">
            <FormEdit />
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
