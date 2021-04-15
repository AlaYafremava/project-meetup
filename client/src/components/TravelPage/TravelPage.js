import React from 'react'
import './TravelPage.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {
  fetchDelTravels,
  fetchJoinToTravel,
  fetchUnjoinToTravel,
} from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch, useSelector } from 'react-redux'

function TravelPage(props) {
  const token = window.localStorage.getItem('token')
  const { id } = useParams()
  const history = useHistory()
  const store = useSelector(store => store)
  const userId = store.user.user._id
  const [state, setState] = useState({})
  const user = useSelector(store => store.user.user)

  useEffect(async () => {
    const response = await fetch(`/travels/${id}`, {
      method: 'GET',
      // headers: {  "Content-Type": "Application/json", 'Authorization': `Bearer ${token}` }
    })
    const result = await response.json()
    setState(result)
  }, [])

  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(fetchDelTravels(id))
    history.push('/travels')
  }

  const sendMailHandler = e => {
    console.log(e.target.messageEmail.value)
    e.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(
        {message: e.target.messageEmail.value, ownerId: state?.travel?.owner, from: `${store.user.user.name} ${store.user.user.surname}`, userEmail: store.user.user.email }
      )
    }).then(res => res.json())
    .then(data => {
      if (data.status === true){
      alert("Message sent!")
      } else {
        alert("Message not sent!")
      }
    })
      .then(res => res.json())
      .then(data => {
        alert('Message sent!')
      })
  }

  const joinHandler = () => {
    dispatch(fetchJoinToTravel(userId, state.travel._id))
  }

  const unJoinHandler = () => {
    dispatch(fetchUnjoinToTravel(userId, state.travel._id))
  }

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <header className="major">
            <span className="date">
              {state?.travel?.startDate.slice(0, 10)} &#160; ~ &#160;{' '}
              {state?.travel?.finishDate.slice(0, 10)}
            </span>
            <h1>{state?.travel?.title}</h1>
            <p>
              The world is a book
              <br /> and those who do not travel read only one page...
            </p>
          </header>
          <div className="image main">
            <img src={state?.travel?.src} alt="pic" />
          </div>
          <p>{state?.travel?.description}</p>
          <ul className="actions fit small">
            {state?.travel?.owner._id === userId ? (
              <li>
                <Link to={`/travels/${id}/edit`} className="button fit small">
                  Edit travel
                </Link>
              </li>
            ) : (
              <a></a>
            )}
            {state?.travel?.owner._id === userId ? (
              <li>
                <button onClick={deleteHandler} className="button fit small">
                  Delete travel
                </button>
              </li>
            ) : (
              <a></a>
            )}
          </ul>
          {state?.travel?.owner._id !== userId && (
            <div>
              <h2>Let's go with {state?.travel?.owner.name}</h2>
              {user.futureTravels.find(travel => travel._id === id) ? (
                <>
                  <button onClick={unJoinHandler} className="button">
                    Unjoin from the travel
                  </button>
                  <p>
                    You already joined to the journey. If your plans change, please inform{' '}
                    {state?.travel?.owner.name} about it.
                  </p>
                </>
              ) : (
                <button onClick={joinHandler} className="button primary">
                  Join to the travel
                </button>
              )}
            </div>
          )}
        </section>
      </div>
      <footer id="footer" className="footer-post">
        <section className="footer-post-sect">
        {(state?.travel?.owner !== userId) ?
          <form onSubmit={sendMailHandler} method="post">
            <div className="fields">
              <div className="field">
                <label htmlFor="message">Message to {state?.travel?.owner.name}</label>
                <textarea
                  placeholder={`${state?.travel?.owner.name} will get your message by email.`}
                  name="messageEmail"
                  id="message"
                  rows="3"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form> : <a></a>}
        </section>
        <section className="split contact footer-post-sect">
          <section className="alt">
            <h3>Creator</h3>
            <Link to={`/people/${state?.travel?.owner._id}`} style={{ borderBottom: 'none' }}>
              <p>{state?.travel?.owner.name}</p>
            </Link>
          </section>
          <section>
            <h3>Travel to</h3>
            <p>
              {state?.travel?.country}, {state?.travel?.city}
            </p>
          </section>
          <section>
            <h3>Dates</h3>
            <p>
              From {state?.travel?.startDate.slice(0, 10)} to{' '}
              {state?.travel?.finishDate.slice(0, 10)}
            </p>
          </section>
          <section>
            <h3>Number of travellers</h3>
            <p>{state?.travel?.number}</p>
          </section>
        </section>
      </footer>
    </>
  )
}

export default TravelPage
