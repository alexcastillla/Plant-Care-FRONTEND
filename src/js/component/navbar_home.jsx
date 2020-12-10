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
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [error, setError] = useState("");
	const [displayerror, setDisplayerror] = useState("Errormesage");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<nav className="navbar navbar-light mb">
			<Link to="/username/view">
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Button className="btn-navbar-view" onClick={handleShow}>
					Login
				</Button>
				<Modal show={show} onHide={handleClose} animation={false}>
					<Modal.Body className="body-form-login">
						<p className="logocontainer mt-2 mb-2">
							<img src={logo2} className="logo2" />{" "}
						</p>
						<p className={displayerror}>The {error} is invalid</p>
						<Form>
							<Form.Group controlId="formBasicusername" className="form-inputs">
								<Form.Label>Email address</Form.Label>
								<Form.Control className="email" onChange={e => setEmail(e.target.value)} />
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									className="psswd"
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
						</Form>
						<Button
							className="Save-login btn-block"
							type="submit"
							onClick={() => {
								if (email.length < 5) {
									setError("Username");
									setDisplayerror("Errormesageshow");
								} else if (password.length < 6) {
									setError("Password");
									setDisplayerror("Errormesageshow");
								} else {
									actions.login(email, password);
									handleClose();
								}
							}}>
							Send
						</Button>
					</Modal.Body>
				</Modal>
			</div>
		</nav>
	);
};
