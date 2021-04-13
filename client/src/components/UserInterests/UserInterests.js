import React, { useContext, useEffect } from 'react';
import './UserInterests.css'
import { useDispatch, useSelector } from 'react-redux'

function UserInterests(props) {
  // const dispatch = useDispatch()

  const user = useSelector(store => store.profile.user)
  console.log(user);

  // useEffect(() => {
  //   fetch('/profile', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'application/json',
  //       'Authorization':`Bearer ${token}`,
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(user => console.log(user))
  // }, [])

  return (
    <div>
      <ul className='actions'>
        <li>
          {user.tags ? user.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'}
          
        </li>
      </ul>

    </div>
  );
}

export default UserInterests;
