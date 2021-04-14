import React from 'react';

function UserLang({el, selectLangHandler}) {
  return (
      <input className='langs' type='button' onClick={() => selectLangHandler(el.title)} value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserLang;
