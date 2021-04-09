import React from 'react';
import './CardUser.css'

function CardUser(props) {
  return (
    <div className="card">
      <img src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1" alt="John" style={{ borderRadius: '100px' }} />
      <h1>Name</h1>
      <p className="title">City</p>
      <p>age</p>
      <a href="#"><i className="fa fa-dribbble"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-facebook"></i></a>
      <p><button>Contact</button></p>
    </div>
  );
}

export default CardUser;
