import React from 'react';
import './UserLang.css'

function UserLang({el, selectLangHandler}) {
  return (
      <input className={(el.check ? 'langs active' : 'langs') || (!el.check ? 'langs': 'langs active')} 
      type='button' onClick={() => selectLangHandler(el.title)} value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserLang;
