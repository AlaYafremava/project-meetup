import React from 'react'
import './TravelPage.css'
import Header from '../Header/Header'
import {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom"
import { fetchDelTravels} from "../../redux/reduxThunk/asyncFuncs"
import { useDispatch } from 'react-redux'

function TravelPage(props) {
  const token = window.localStorage.getItem('token')
  const {id} = useParams()
  const history = useHistory()
const [state, setState] = useState({})


  useEffect( async() => {
    const response = await fetch(`http://localhost:4000/travels/${id}`, {
      method: "GET",
      // headers: {  "Content-Type": "Application/json", 'Authorization': `Bearer ${token}` }
    })
    const result = await response.json()
    setState(result)
  },[])

  const dispatch = useDispatch()

  const deleteHandler = () => {
      dispatch(fetchDelTravels(id))
      history.push("/travels")

  }

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <header className="major">
            <span className="date">{state?.travel?.startDate.slice(0,10)} 	&#160; ~ 	&#160; {state?.travel?.finishDate.slice(0,10)}</span>
            <h1>{state?.travel?.title}</h1>
            <p>
              The world is a book
              <br /> and those who do not travel read only one page...
            </p>
          </header>
          <div className="image main">
            <img src={state?.travel?.src} alt="pic" />
          </div>
          <p>
          {state?.travel?.description}
          </p>
          <ul className="actions fit small">
            <li>
              <a href={`/travels/${id}/edit`} className="button fit small">
                Edit travel
              </a>
            </li>
            <li>
               <a onClick={deleteHandler} className="button fit small">
                Delete travel
              </a>
            </li>
          </ul>
        </section>
      </div>
      <footer id="footer" className="footer-post">
        <section className="footer-post-sect">
          <form method="post">
            <div className="fields">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact footer-post-sect">
          <section className="alt">
            <h3>Creator</h3>
            <a href="/people/:id">

            <p>Alla Yefremova <br />
            Saint-Petersburg
            </p>
            </a>
          </section>
          <section>
            <h3>Travel to</h3>
            <p>{state?.travel?.country}, {state?.travel?.city}</p>
          </section>
          <section>
            <h3>Dates</h3>
            <p>From {state?.travel?.startDate.slice(0,10)} to {state?.travel?.finishDate.slice(0,10)}</p>
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
