import React from 'react';
import './UserInterests.css'

function UserInterests(props) {
  return (
    <div>
      <h3> Interests </h3>
      <ul className='actions'>
        <li>
          <input className='tags' type='submit' value='Vegan' style={{ borderRadius: '10px' }}/>
        </li>
      </ul>
    </div>
  );
}

export default UserInterests;
