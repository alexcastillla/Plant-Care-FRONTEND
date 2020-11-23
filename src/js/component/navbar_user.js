import React from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../../img/logo_navbar.jpg";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb">
			<Link to="/username/view">
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn-navbar-view">Log Out</button>
				</Link>
			</div>
		</nav>
	);
};
