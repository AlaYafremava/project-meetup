import React from 'react';
import './UserTag.css'


function UserTag({ el, changeStatusHandler }) {

// onFocus={() => document.querySelectorAll('.tags').filter((el) => el.className = 'tags active')}
// onFocus={(el) => el.className = 'tags active'}
return (
  <input className={(el.check ? 'tags active' : 'tags') || (!el.check ? 'tags': 'tags active')} 
  type='button' onClick={() => changeStatusHandler(el.title)} 
  value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserTag;
