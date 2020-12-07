import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Profile = () => {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState({ username: "", email: "", password: "", location: "" });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="view-profile-button" onClick={handleShow}>
				View Profile
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>User Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>See Your Profile</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button className="Save-register btn-block" type="submit">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
