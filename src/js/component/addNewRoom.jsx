import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/addNewRoom.scss";
import logoRoomAdd from "../../img/logo_room_add.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ModalRoomInputs = () => {
	const { store, actions } = useContext(Context);
	const [nameRoom, setNameRoom] = useState("");
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Button className="button-add-room" onClick={handleShow}>
				Añade una nueva ubicación
			</Button>
			<Modal show={show} onHide={handleClose} className="form-room">
				<Modal.Body className="modal-room">
					<img className="room-logo-img" src={logoRoomAdd} />
					<Form
						onSubmit={e => {
							e.preventDefault();
						}}
						className="form-input-add-room">
						<Form.Group controlId="formNameRoom">
							<Form.Label className="modal-add-name-input">Nombre de la ubicación</Form.Label>
							<Form.Control
								required
								className="inputNameRoom"
								type="string"
								onChange={e => setNameRoom(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<Button
						className="save-button btn-block"
						type="submit"
						onClick={() => {
							handleClose();
							actions.createRoom(nameRoom);
						}}>
						Guardar
					</Button>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};
