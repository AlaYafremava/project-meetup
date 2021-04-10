import React from 'react';
import './UserCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

function CardUser(props) {
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  console.log(user)
  return (
    <div className="card">
      <img src={user.avatar} alt="" style={{ borderRadius: '100px' }} />
      <p className='userName'>{user.name} {user.surname}</p>
      <p className="title">{user.city}</p>
      <a href="#"><i className="fa fa-dribbble"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-facebook"></i></a>
      {/* <p><button>Contact</button></p> */}
    </div>
  );
}
export default CardUser;
