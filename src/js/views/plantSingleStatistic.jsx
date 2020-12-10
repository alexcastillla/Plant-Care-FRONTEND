import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/plantSingleStatistic.scss";
import Iconcard from "../../img/statistics.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Chart from "chart.js";

export const PlantSingleStatistic = () => {
	const { store, actions } = useContext(Context);
	let { plantName } = useParams();

	let plant = store.plants.find(plant => plant.name_plant == String(plantName));

	useEffect(() => {
		let temperature_input = document.querySelector(".chart-temperature");
		let humidity_input = document.querySelector(".chart-humidity");

		let temperature_chart = new Chart(temperature_input, {
			type: "line",
			data: {
				labels: [10, 11, 12, 13],
				datasets: [
					{
						label: "Temperatura",
						data: [12, 15, 5, 8],
						backgroundColor: ["rgba(149, 141, 206, 0.26)"],
						borderColor: ["rgba(217, 143, 129, 0.72)"],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				animation: {
					duration: 3000
				}
			}
		});
		let humidity_chart = new Chart(humidity_input, {
			type: "line",
			data: {
				labels: [1, 2, 3, 4, 5, 6],
				datasets: [
					{
						label: "Humedad",
						data: [16, 15, 7, 19, 5, 6],
						backgroundColor: ["rgba(137, 182, 210, 0.35)"],
						borderColor: ["rgba(217, 143, 129, 0.72)"],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				animation: {
					duration: 3000
				}
			}
		});
	}),
		[plant];

	return (
		<div className="container">
			<p className="nameList">Detalle de la planta:</p>
			<Container className="container-card-info">
				<Row>
					<Col ml={4} offset={4}>
						<Card className="card-info">
							<Card.Body>
								<Row>
									<Card.Text>
										<p>
											Hola soy <label className="label-single">{plant.name_plant}</label> y estoy
											conectada al sensor{" "}
											<label className="label-single">{plant.sensor_number}</label>.
										</p>
										<p>
											Mi temperatura y humedad actual es de{" "}
											<label className="label-single">
												{plant.temperature_sensor}
												°C
											</label>
											y <label className="label-single">{plant.humidity_sensor}%</label>.
										</p>
										<p>
											Como me encuentro en fase de{" "}
											<label className="label-single">{plant.grow_phase}</label> mi temperatura y
											humedad ideal es de:
										</p>
										<ul>
											<li>
												Temperatura máxima ideal:{" "}
												<label className="label-single">
													{plant.temperature_max_ideal}
													°C
												</label>
											</li>
											<li>
												Temperatura mínima ideal:{" "}
												<label className="label-single">
													{plant.temperature_min_ideal}
													°C
												</label>
											</li>
											<li>
												Humedad máxima ideal:{" "}
												<label className="label-single">{plant.humidity_max_ideal}%</label>
											</li>
											<li>
												Humedad mínima ideal:{" "}
												<label className="label-single">{plant.humidity_min_ideal}%</label>
											</li>
										</ul>
									</Card.Text>
									<Card.Img src={Iconcard} className="card-img" />
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<p className="nameList">Histórico:</p>
			<Card className="card-info-data">
				<Card.Body>
					<Card.Text className="card-text-data">
						<p>
							A continuación, se muestran los valores recogidos en las últimos horas por parte del sensor:
						</p>
					</Card.Text>
				</Card.Body>
			</Card>
			<Container>
				<Row>
					<Col ml={6}>
						<canvas className="chart-temperature" id="chart-temperature" />
					</Col>
					<Col ml={6}>
						<canvas className="chart-humidity" id="chart-humidity" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
