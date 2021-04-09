import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import Main from './components/Profile/Profile'
import store from './redux/store'
import { Provider } from 'react-redux'
import Travels from './components/Travels/Travels'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>

          <Route path="/dashboard">
            <Main />
          </Route>

          <Route path="/travels">
            <Travels />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
