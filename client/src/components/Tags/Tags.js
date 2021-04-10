import React from 'react';
import './Tags.css'

function Tags(props) {
  return (
    <ul className='actions'>
      <li>
      <input className='tags' type='submit' value='Vegan'/>
      </li>
      <li>
      <input className='tags' type='submit' value='Music'/>
      </li>
      <li>
      <input className='tags' type='submit' value='Bycycling'/>
      </li>
      <li>
      <input className='tags' type='submit' value='Running'/>
      </li>
      <li>
      <input className='tags' type='submit' value='Movies'/>
      </li>
    </ul>
  );
}

export default Tags;
