import React from 'react';
import './UserInterests.css'
import { v4 as uuidv4 } from 'uuid';

function UserInterests({tags}) {

  return (
    <div  >

      <ul className='actions' style={{display: 'flex', flexWrap:'wrap'}}>
        {tags?.length > 0 ? tags.map(tag =>  <li key={uuidv4()} style={{marginTop: '1rem'}}>
          <input className='userTags' type='submit' value={tag.title}/>
        </li>) : 'No interests listed'}

      </ul>

    </div>
  );
}

export default UserInterests;
