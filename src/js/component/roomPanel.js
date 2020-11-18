import React, { useState } from "react";
import addButtonIcon from "../../img/icon_plus_add.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
