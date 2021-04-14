import React from 'react';
import './UserInterests.css'
import { useSelector } from 'react-redux'

function UserInterests(props) {
  // const dispatch = useDispatch()

  const user = useSelector(store => store.user.user)
  console.log(user);

  return (
    <div>
      <ul className='actions'>
        <li>
          {/* {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'} */}
          <input className='userTags' type='submit' value='Running'/>
        </li>
        <li>
          {/* {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'} */}
          <input className='userTags' type='submit' value='Movies'/>
        </li>
        <li>
          {/* {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'} */}
          <input className='userTags' type='submit' value='Street food'/>
        </li>
        <li>
          {/* {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'} */}
          <input className='userTags' type='submit' value='IT'/>
        </li>
        <li>
          {/* {user.tags ? user?.tags.map((el, i) => <input className='tags' type='submit' value={el} />): 'Здесь будут теги'} */}
          <input className='userTags' type='submit' value='Travels'/>
        </li>
      </ul>

    </div>
  );
}

export default UserInterests;
