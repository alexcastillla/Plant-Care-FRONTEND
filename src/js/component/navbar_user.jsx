import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import LogoNavbar from "../../img/logo_navbar.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/navbar_username.scss";

export const NavbarUser = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light">
			<Link to="/username/view">
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Button className="btn-navbar-view" onClick={(() => window.location.reload(), actions.logOut())}>
					Logout
				</Button>
			</div>
		</nav>
	);
};
