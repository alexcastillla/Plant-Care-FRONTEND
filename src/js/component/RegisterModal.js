import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/registermodal.scss";
import logo2 from "../../img/logo2.jpg";
import profilephoto from "../../img/profilephoto.jpg";

export const Registermodal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [location, setLocation] = useState("");
	const [error, setError] = useState("");
	const [displayerror, setDisplayerror] = useState("Errormesage");

	return (
		<>
			<Button className="join-button-home" onClick={handleShow}>
				Join
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Body className="body-form">
					<p className="logocontainer mt-2 mb-2">
						<img src={logo2} className="logo2" />
					</p>
					<p className={displayerror}>The {error} is invalid</p>
					<Form>
						<Form.Group controlId="formBasicusername" className="form-inputs">
							<Form.Label>Username</Form.Label>
							<Form.Control className="user-text" onChange={e => setUsername(e.target.value)} />
							<Form.Label>Email address</Form.Label>
							<Form.Control className="email" onChange={e => setEmail(e.target.value)} />
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								className="psswd"
								onChange={e => setPassword(e.target.value)}
							/>
							<Form.Label>Location</Form.Label>
							<Form.Control className="location-text" onChange={e => setLocation(e.target.value)} />
						</Form.Group>
					</Form>
					<Button
						className="Save-register btn-block"
						type="submit"
						onClick={() => {
							if (username.length < 5) {
								setError("Username");
								setDisplayerror("Errormesageshow");
							}
							// if (!("@" in email)) {
							// 	alert("Email is invalid");
							// }
							else if (password.length < 6) {
								setError("Password");
								setDisplayerror("Errormesageshow");
							} else if (location.length < 4) {
								setError("Location");
								setDisplayerror("Errormesageshow");
							} else {
								actions.add_new_user(username, email, password, location);
								setDisplayerror("Errormesage");
							}
						}}>
						Save Changes
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};