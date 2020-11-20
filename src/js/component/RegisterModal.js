import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/registermodal.scss";

export const Registermodal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [location, setLocation] = useState("");

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Join
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Plant Care</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicusername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" onChange={e => setUsername(e.target.value)} />
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" onChange={e => setEmail(e.target.value)} />
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" onChange={e => setPassword(e.target.value)} />
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" onChange={e => setLocation(e.target.value)} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="Save-register"
						type="submit"
						onClick={() => {
							actions.add_new_user(username, email, password, location);
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
