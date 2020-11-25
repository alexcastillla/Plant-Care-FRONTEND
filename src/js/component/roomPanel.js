import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/modalRoomAdd.scss";
import logoRoomAdd from "../../img/logo_room_add.png";
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
		<Fragment>
			<i className="fas fa-plus-circle fa-2x" onClick={handleShow} />
			<Modal show={show} onHide={handleClose} className="form-room">
				<Modal.Body className="modal-room">
					<img className="room-logo-img" src={logoRoomAdd} />
					<Form
						onSubmit={e => {
							e.preventDefault();
						}}
						className="form-input-add-room">
						<Form.Group controlId="formNameRoom">
							<Form.Label className="Modal-Add-name-input">Nombre de la ubicación</Form.Label>
							<Form.Control
								className="inputNameRoom"
								type="string"
								onChange={e => setRoomName(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<Button
						className="save-button btn-block"
						type="submit"
						onClick={() => {
							handleClose();
							actions.addRoom(roomName);
							actions.addRoomAPI(roomName);
						}}>
						Guardar
					</Button>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};
