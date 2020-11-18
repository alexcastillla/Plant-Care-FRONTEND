import React, { useState } from "react";
import addButtonIcon from "../../img/icon_plus_add.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Pepocho = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			{/* <Button className="add-button" onClick={handleShow}> */}
			<img className="add-button-img" src={addButtonIcon} onClick={handleShow} />
			{/* </Button> */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new Room</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formNameRoom">
							<Form.Label>Room Name</Form.Label>
							<Form.Control className="inputNameRoom" type="string" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="save-button" onClick={handleClose}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
