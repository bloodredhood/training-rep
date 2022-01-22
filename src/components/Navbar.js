import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom"

//activeClassName={styles.active}

const Navbar = () => {
	return (
		<nav className='nav'>
				<NavLink to='/profile' className='navItem'>Profile</NavLink>
				<NavLink to='/news' className='navItem'>News</NavLink>
				<NavLink to='/users' className='navItem'>Users</NavLink>
				<NavLink to='/dialogs' className='navItem'>Dialogs</NavLink>
		</nav>
	)
}

export default Navbar