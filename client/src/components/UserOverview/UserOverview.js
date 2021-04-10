import React from 'react'
import './UserOverview.css'

function UserOverview(props) {
  return (
    <div className="row">
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-venus-mars"></i>
            </span>
            &nbsp; 33, Female
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-comments-o"></i>
            </span>
            &nbsp; English, Russian
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-user"></i>
            </span>
            &nbsp; Member since 2018
          </li>
        </ul>
      </div>
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-home"></i>
            </span>
            &nbsp; Brest
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-graduation-cap"></i>
            </span>
            &nbsp;Brest Univercity
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-suitcase"></i>
            </span>
            &nbsp; Engineer
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserOverview
