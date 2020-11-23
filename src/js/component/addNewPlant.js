import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/modaPlantAdd.scss";
import addplantlogo from "../../img/addplantlogo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ModalNewPlant = () => {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	const [newPlant, setNewPlant] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Button className="button-add-plant" onClick={handleShow}>
				Add a new Plant 🌺
			</Button>
			<Modal show={show} onHide={handleClose} className="form-room">
				<Modal.Body className="modal-room">
					{/* <Modal.Title>Add a new</Modal.Title> */}
					<img className="plant-logo-img" src={addplantlogo} />
					<Form
						onSubmit={e => {
							e.preventDefault();
						}}
						className="form-input-add-room">
						<Form.Group controlId="formNameRoom">
							<Form.Label className="Modal-Add-name-input">Plant Name</Form.Label>
							<Form.Control
								className="inputPlant"
								type="string"
								onChange={e => setRoomName(e.target.value)}
							/>
							<Form.Label className="Modal-Add-name-input mt-2">Room Name</Form.Label>
							<Form.Control
								className="inputPlant"
								type="string"
								onChange={e => setRoomName(e.target.value)}
							/>
							<Form.Label className="Modal-Add-name-input mt-2">Type of Plants</Form.Label>
							<Form.Control
								className="inputPlant"
								// type="string"
								onChange={e => setRoomName(e.target.value)}
								as="select"
								defaultValue="Choose...">
								<option>Choose...</option>
								<option value="1">Exterior</option>
								<option value="2">Interior</option>
							</Form.Control>
							<Form.Label className="Modal-Add-name-input mt-2">Sensor Name</Form.Label>
							<Form.Control
								className="inputPlant"
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
						}}>
						Save
					</Button>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};
