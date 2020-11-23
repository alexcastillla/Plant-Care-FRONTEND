import React from "react";
import "../../styles/userview.scss";
import { ModalRoomInputs } from "../component/roomPanel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ButtonRoomGenerator } from "../component/roomGeneratorMap";
import { RoomGeneratorPlants } from "../component/PlantsRoomGenerator";
import { ModalNewPlant } from "../component/addNewPlant";

export const Userview = () => {
	return (
		<div>
			<div className="mt-0 room-panel">
				<Row>
					<Col className="Add-column-room-name" sm={3}>
						<p className="mt-2">Ubicaciones</p>
					</Col>
				</Row>
				<Row className="mt-0">
					<Col sm={3} className="Add-column-room">
						<ModalRoomInputs />
					</Col>
					<Col sm={9} className="Add-column-room-viewlist">
						<ButtonRoomGenerator />
					</Col>
				</Row>
			</div>
			<div className="newplant mt-2 mb-2">
				<ModalNewPlant />
			</div>
			<div className="mt-5 plants-panel">
				<Col>
					<RoomGeneratorPlants />
				</Col>
			</div>
		</div>
	);
};
