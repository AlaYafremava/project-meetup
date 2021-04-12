import React, { useContext, useEffect } from 'react';
import './UserInterests.css'
// import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

function UserInterests(props) {
  // const dispatch = useDispatch()
  // const params = useParams()
  const token = window.localStorage.getItem('token')
  const store = useSelector(store => store)
  // console.log(store.auth.user);

  useEffect(() => {
    fetch('/profile', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(user => console.log(user))
  }, [])

  return (
    <div>
      <ul className='actions'>
        <li>
          {store.auth.user.tags ? store.auth.user.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'}
          
        </li>
      </ul>

    </div>
  );
}

export default UserInterests;
