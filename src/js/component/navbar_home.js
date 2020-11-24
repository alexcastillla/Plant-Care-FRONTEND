import React from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../../img/logo_navbar.jpg";
import "../../styles/navbar_home.scss";
export const NavbarHome = () => {
	return (
		<nav className="navbar navbar-light mb">
			<Link to="/username/view">
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn-navbar-view">Login</button>
				</Link>
			</div>
		</nav>
	);
};
