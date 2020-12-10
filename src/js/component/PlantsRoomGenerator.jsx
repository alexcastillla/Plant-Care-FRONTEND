import React, { Component, useState, useEffect, useContext, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Iconcard from "../../img/icon_card_plant.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ModalNewPlant } from "./addNewPlant.jsx";
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
						<Card className="card-plant" key={idx}>
							<img src={Iconcard} className="card-img-top" />
							<Card.Body>
								<Card.Title>{plant.name_plant}</Card.Title>
								<Card.Text className="humidity">Humedad:</Card.Text>
								<ProgressBar animated variant="info" now={plant.humidity_sensor} />
								<Card.Text className="temperature">{plant.temperature_sensor} °C</Card.Text>
								<Card.Text className="name-room">#{plant.name_room}</Card.Text>
								<Link to={`/username/${plant.name_plant}`}>
									<button type="button" className="button-info">
										Más info
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
