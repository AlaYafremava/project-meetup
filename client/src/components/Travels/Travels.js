import React from 'react'
import Header from '../Header/Header'

function Travels(props) {
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div class="col-3 col-12-small">боковая панель</div>
            <div class="col-9 col-12-small">шлавная панель</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Travels
