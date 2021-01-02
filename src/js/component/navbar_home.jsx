import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo2 from "../../img/logo2.jpg";
import LogoNavbar from "../../img/logo_navbar.jpg";
import "../../styles/navbar_home.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const NavbarHome = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb">
			<Link to="/username/view">
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Link to="/loguin">
					<Button className="btn-navbar-view">Login</Button>
				</Link>
			</div>
		</nav>
	);
};
