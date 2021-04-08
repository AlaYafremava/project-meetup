import React from 'react';
import './Login.module.css'

function Login(props) {
  return (
    <section className="is-preload">

			<header id="header">
				<h1>Eventually</h1>
				<p>A simple template for telling the world when you'll launch<br />
				your next big thing. Brought to you by.</p>
			</header>

			<form id="signup-form" method="post" action="#">
				<input type="email" name="email" id="email" placeholder="Email Address" />
				<input type="submit" value="Sign Up" />
			</form>


			{/* <script src="assets/js/main.js"></script> */}

	</section>
  );
}

export default Login;
