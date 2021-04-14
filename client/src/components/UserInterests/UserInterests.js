import React, { useContext, useEffect } from 'react';
import './UserInterests.css'
import { useDispatch, useSelector } from 'react-redux'

function UserInterests(props) {
  // const dispatch = useDispatch()

  const user = useSelector(store => store.user.user)
  console.log(user);

  return (
    <div>
      <ul className='actions'>
        <li>
          {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'}
          
        </li>
      </ul>

    </div>
  );
}

export default UserInterests;
