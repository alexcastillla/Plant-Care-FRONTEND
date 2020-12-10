import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/addNewPlant.scss";
import addplantlogo from "../../img/addplantlogo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ModalNewPlant = () => {
	const { store, actions } = useContext(Context);
	const [namePlant, setNamePlant] = useState("");
	const [locationPlant, setLocationPlant] = useState("");
	const [typePlant, setTypePlant] = useState("");
	const [growPlant, setGrowPlant] = useState("");
	const [sensorPlant, setSensorPlant] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Button className="button-add-plant" onClick={handleShow}>
				Añade una nueva planta
			</Button>
			<Modal show={show} onHide={handleClose} className="form-room">
				<Modal.Body className="modal-room">
					<img className="plant-logo-img" src={addplantlogo} />
					<Form
						onSubmit={e => {
							e.preventDefault();
						}}
						className="form-group-plant">
						<Form.Group controlId="formNameRoom" className="form-group-plant">
							<Form.Label className="modal-name">Nombre de la planta</Form.Label>
							<Form.Control
								className="inputPlant"
								required
								type="string"
								onChange={e => setNamePlant(e.target.value)}
							/>
							<Form.Label className="modal-name mt-2">Ubicación</Form.Label>
							<Form.Control
								className="inputPlant"
								required
								type="string"
								onChange={e => setLocationPlant(e.target.value)}
							/>
							<Form.Label className="modal-name mt-2">Tipo de planta</Form.Label>
							<Form.Control
								className="inputPlant"
								required
								onChange={e => setTipoPlant(e.target.value)}
								as="select"
								defaultValue="Elige...">
								<option>Elige...</option>
								{store.grows.map((grow, index) => {
									return <option key={index}>{grow.name_grow_phase}</option>;
								})}
							</Form.Control>
							<Form.Label className="modal-name mt-2">Fase de crecimiento</Form.Label>
							<Form.Control
								className="inputPlant"
								required
								onChange={e => setGrowPlant(e.target.value)}
								as="select"
								defaultValue="Elige...">
								<option>Elige...</option>
								{store.types.map((type, index) => {
									return <option key={index}>{type.name_type}</option>;
								})}
							</Form.Control>
							<Form.Label className="modal-name mt-2">Número de sensor</Form.Label>
							<Form.Control
								className="inputPlant"
								required
								type="string"
								onChange={e => setSensorPlant(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<Button
						className="save-button btn-block"
						type="submit"
						onClick={() => {
							handleClose();
							actions.createPlant(namePlant, locationPlant, typePlant, growPlant, sensorPlant);
						}}>
						Guardar
					</Button>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};
