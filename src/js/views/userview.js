import React, { useState, useEffect, useContext, Fragment } from "react";
import "../../styles/userview.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ModalRoomInputs } from "../component/roomPanel.jsx";
import { ButtonRoomGenerator } from "../component/roomGeneratorMap.jsx";
import { RoomGeneratorPlants } from "../component/PlantsRoomGenerator.jsx";
import { ModalNewPlant } from "../component/addNewPlant.jsx";

export const Userview = () => {
	return (
		<Fragment>
			<div className="room-panel">
				<div className="panel">
					{/* <Row> */}
					{/* <Col className="Add-column-room-name" sm={3}> */}
					<p className="nameList">Ubicaciones</p>
					{/* </Col> */}
					{/* </Row> */}
					<Row className="mt-0">
						<Col sm={3} className="Add-column-room">
							<ModalRoomInputs />
						</Col>
						<Col sm={9} className="Add-column-room-viewlist">
							<ButtonRoomGenerator />
						</Col>
					</Row>
				</div>
			</div>
			<div className="mt-2 plants-panel">
				<Col>
					<RoomGeneratorPlants />
				</Col>
			</div>
		</Fragment>
	);
};
