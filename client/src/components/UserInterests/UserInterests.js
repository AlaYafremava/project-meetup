import React from 'react';
import './UserInterests.css'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

function UserInterests(props) {
  // const dispatch = useDispatch()

  const tags = useSelector(store => store.user.user.tags.filter(tag => tag.check))
  // console.log(tags);

  return (
    <div>
      <ul className='actions'>
        {tags ? tags.map(tag =>  <li key={uuidv4()}>
          <input className='userTags' type='submit' value={tag.title} onClick={(e) => e.preventDefault()}/>
        </li>) : 'No interests listed'}
      </ul>

    </div>
  );
}

export default UserInterests;
