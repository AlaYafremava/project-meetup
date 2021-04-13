import React from 'react';
import { fetchChangeTagStatus } from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch, useSelector } from 'react-redux'

function UserTag({ el }) {
  const dispatch = useDispatch()

  const changeStatusHandler = (id) => {
    dispatch(fetchChangeTagStatus(id))
  }

  return (
    <input className='tags' type='submit'  onClick={() => changeStatusHandler(el._id)} value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserTag;
