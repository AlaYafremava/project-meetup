import React, {useState} from 'react';
import { fetchChangeTagStatus } from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch, useSelector } from 'react-redux'

function UserTag({ el, changeStatusHandler }) {

  console.log(el);
  const user = useSelector(store => store.user.user)
  // const [tagState, setTagState] = useState(user.tags)
  // console.log(tagState);
  const dispatch = useDispatch()

  // const changeStatusHandler = (id) => {
  //   setTagState(el.check = !el.check)
  //   // dispatch(fetchChangeTagStatus(id))
  // }

  return (
    <input className='tags' type='submit' onClick={() => changeStatusHandler(el._id)} value={el.title} style={{ paddingTop: 0, marginTop: 20, marginLeft: 30 }} />
  );
}

export default UserTag;
