import React from "react";
import "../../styles/userview.scss";
import { Pepocho } from "../component/roomPanel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ButtonRoomGenerator } from "../component/roomGeneratorMap";

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
						<Pepocho />
					</Col>
					<Col sm={9} className="Add-column-room-viewlist">
						{/* <Button className="room-item-view">
							<p>Terraza</p>
						</Button> */}
						<ButtonRoomGenerator />
					</Col>
				</Row>
			</div>
			<div className="text-center mt-5 card-panel">
				<h1>Hola soy el panel en donde van a ir las plantas!</h1>
			</div>
		</div>
	);
};
