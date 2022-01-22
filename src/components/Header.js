import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = (props) => {
	return (
		<header className='header'>
			<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="" />
			<div className="loginBlock">
				{props.isAuth
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
        : <NavLink to="/login">Login</NavLink> }
			</div>
		</header>
	)
}

export default Header