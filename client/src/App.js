import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Auth from './components/Auth/Auth'
import Main from './components/Main/Main'
import store from './redux/store'
import { Provider } from 'react-redux'
import Travels from './components/Travels/Travels'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <div id="main">
            <Route path="/dashboard">
              <Main />
            </Route>

            <Route path="/travels">
              <Travels />
            </Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
