import React from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../../img/logo_navbar.jpg";
import "../../styles/navbar_username.scss";

export const NavbarUser = () => {
	return (
		<nav className="navbar navbar-light">
			<Link to="/">
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
