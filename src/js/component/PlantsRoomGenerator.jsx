import React, { Component, useState, useEffect, useContext, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Iconcard from "../../img/icon_card_plant.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ModalNewPlant } from "../component/addNewPlant.jsx";
import { ModalRoomInputs } from "./addNewRoom.jsx";
import "../../styles/PlantsRoomGenerator.scss";
import { Button } from "react-bootstrap/Button";

export const RoomGeneratorPlants = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const [filteredPlants, setFilteredPlants] = useState([]);

	useEffect(
		() => {
			setFilteredPlants(
				store.plants.filter(planta => planta.name_room.toLowerCase().includes(search.toLowerCase()))
			);
		},
		[search, store.plants]
	);

	return (
		<Fragment>
			<div className="container-of-plants">
				<p className="nameList">Plantas</p>
				<div className="container-of-srch">
					<input
						className="srch"
						type="text"
						placeholder="Ubicación"
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<div className="direction-card">
					{filteredPlants.map((plant, idx) => (
						<Card style={{ width: "16rem" }} className="card-plant" key={idx}>
							<Card.Img variant="top" src={Iconcard} className="card-img" />
							<Card.Body>
								<Card.Title>{plant.name_plant}</Card.Title>
								<Card.Text>Humedad:</Card.Text>
								<ProgressBar animated variant="info" now={plant.humidity_sensor} />
								<Card.Text className="temperature">
									Temperatura: {plant.temperature_sensor}
									°C
								</Card.Text>
								<Card.Text className="temperature">Ubicación: {plant.name_room}</Card.Text>
								<Link to={`/username/${plant.name_plant}`}>
									<button type="button" className="btn btn-primary">
										More Info
									</button>
								</Link>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</Fragment>
	);
};
