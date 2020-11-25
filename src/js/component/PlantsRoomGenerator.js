import React, { Component, useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import Iconcard from "../../img/icon_card_plant.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/PlantsRoomGenerator.scss";

export const RoomGeneratorPlants = () => {
	const { store, actions } = useContext(Context);
	const [listItem, setListItem] = useState("");

	useEffect(() => {
		setListItem(
			store.room.map((item, index) => {
				return (
					<div className="" key={index}>
						<p className="roomsName">{item.name_room}</p>
						<label className="direction-card">
							{store.room[index].plants.map((it, i) => {
								return (
									<Card style={{ width: "16rem" }} className="card-plant" key={i}>
										<Card.Img variant="top" src={Iconcard} className="card-img" />
										<Card.Body>
											<Card.Title>{it.name_plant}</Card.Title>
											<Card.Text>Humedad:</Card.Text>
											<ProgressBar animated variant="info" now={it.humidity_sensor} />
											<Card.Text className="temperature">
												Temperatura: {it.temperature_sensor}
												°C
											</Card.Text>
										</Card.Body>
									</Card>
								);
							})}
						</label>
					</div>
				);
			})
		);
	});

	return <div className="container-of-plants">{listItem}</div>;
};
