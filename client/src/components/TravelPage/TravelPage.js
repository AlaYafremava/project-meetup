import React from 'react'
import './TravelPage.css'
import Header from '../Header/Header'

function TravelPage(props) {
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <header className="major">
            <span className="date">April 25, 2017</span>
            <h1>This is a Generic Page</h1>
            <p>
              The world is a book
              <br /> and those who do not travel read only one page...
            </p>
          </header>
          <div className="image main">
            <img src="pic01.jpg" alt="pic" />
          </div>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam,
            vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit
            amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex,
            lacinia in purus ac, pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
            at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Curabitur sapien risus, commodo eget turpis at,
            elementum convallis enim turpis, lorem ipsum dolor sit amet nullam.
          </p>
          <ul className="actions fit small">
            <li>
              <a href="profile/travel/edit" className="button fit small">
                Edit travel
              </a>
            </li>
            <li>
              <a href="profile/travel/delete" className="button fit small">
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
            <p>
              <a href="/people/:id">Alla Yefremova</a>
            </p>
          </section>
          <section>
            <h3>City</h3>
            <p>Saint-Petersburg</p>
          </section>
        </section>
      </footer>
    </>
  )
}

export default TravelPage
