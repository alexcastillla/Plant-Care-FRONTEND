import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import addButtonIcon from "../../img/icon_plus_add.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ModalRoomInputs = () => {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	const [roomName, setRoomName] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			{/* <Button className="add-button" onClick={handleShow}> */}
			<img className="add-button-img" src={addButtonIcon} onClick={handleShow} />
			{/* </Button> */}
			<Modal show={show} onHide={handleClose} className="modal-new-room">
				<Modal.Header closeButton>
					<Modal.Title>Add a new Room</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={() => handleSubmit()}>
						<Form.Group controlId="formNameRoom">
							<Form.Label>Room Name</Form.Label>
							<Form.Control
								className="inputNameRoom"
								type="string"
								onChange={e => setRoomName(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="save-button"
						type="submit"
						onClick={() => {
							handleClose();
							console.log(roomName, "juan");
							actions.addRoom(roomName);
						}}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
