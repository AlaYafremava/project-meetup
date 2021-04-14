import React from 'react'
import './UserOverview.css'
import { useDispatch, useSelector } from 'react-redux'

function UserOverview(props) {

  const user = useSelector(store => store.user.user)
  const langs = useSelector(store => store.user.user.languages.filter(lang => lang.check))
  // console.log(langs);

  let userAge = 2021 - user?.bday?.substr(0, 4)
  // console.log(userAge);

  return (
    <div className="row">
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-venus-mars"></i>
            </span>
            &nbsp; {(!userAge.isNaN && !userAge === 0) ? userAge + ', ' : ''}{user.sex ? user.sex : 'No gender listed'}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-comments-o"></i>
            </span>
            &nbsp; {langs ? langs.map(lang => lang.title + ', ') : 'No languages listed'}
            {/* English, Russian */}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-user"></i>
            </span>
            &nbsp; Member since {user.regDate ? user?.regDate?.substr(0, 4) : 2021}
          </li>
        </ul>
      </div>
      <div className="col-6 col-12-small">
        <ul className="ul-overview">
          <li className="li-overview">
            <span>
              <i className="element-icon fa-home"></i>
            </span>
            &nbsp; {user.homeTown ? user.homeTown : 'No home town listed'}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-graduation-cap"></i>
            </span>
            &nbsp; {user.education ? user.education : 'No education listed'}
          </li>
          <li className="li-overview">
            <span>
              <i className="element-icon fa-suitcase"></i>
            </span>
            &nbsp; {user.profession ? user.profession : 'No profession listed'}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserOverview
