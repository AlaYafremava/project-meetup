import React from 'react';
import './UserTag.css'

function UserTag({ el, changeStatusHandler }) {

  return (
    <input className='tags' type='button' onClick={() => changeStatusHandler(el.title)} value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserTag;
