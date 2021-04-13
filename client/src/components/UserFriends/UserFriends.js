import React from 'react'
import style from './UserFriends.module.css'

function UserFriends(props) {
  return (
    <section>
      {/* <div className="card-friends">
        <img src="avatar.jpeg" alt="avatar" className="avatar" />
        <p className="userName">
          <i>Alla Yefremova</i>
        </p>
        <p className="title-friends">
          <i>
            Saint-Petersburg, <br />
            Russian Federation
          </i>
        </p>
        <hr />
        <ul className="icons alt">
          <li>
            <a href="#" className="icon brands alt fa-telegram">
              <span className="label">Telegram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands alt fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands alt fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
        </ul>
      </div> */}

      <div className="team-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-skype"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <div className="image">
            <a href="#">
              <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" />
            </a>
          </div>
          <div className="lower-content">
            <h3>
              <a href="#">Lorem Ipsum </a>
            </h3>
            <div className="designation">Simply dummy text </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserFriends
