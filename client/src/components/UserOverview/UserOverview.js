import React from 'react'
import './UserOverview.css'
import { useDispatch, useSelector } from 'react-redux'

function UserOverview(props) {

  const user = useSelector(store => store.profile.user)
  // console.log(user);
  let userAge = 2021 - user.bday.substr(0,4)
  // console.log(userAge);

  return (
    <div className="row">
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-venus-mars"></i>
            </span>
            &nbsp; {userAge}, {user.sex}
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
            &nbsp; Member since {user.regDate.substr(0,4)}
          </li>
        </ul>
      </div>
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-home"></i>
            </span>
            &nbsp; {user.homeTown}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-graduation-cap"></i>
            </span>
            &nbsp;{user.education}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-suitcase"></i>
            </span>
            &nbsp; {user.profession}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserOverview
