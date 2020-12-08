import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/plantSingleStatistic.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Chart from "chart.js";

export const PlantSingleStatistic = () => {
	const { store, actions } = useContext(Context);
	let { plantName } = useParams();

	// let plant = store.plantDetail.find(plant => plant.name === String(plantName));
	useEffect(() => {});

	useEffect(() => {
		let temperature_input = document.getElementById("chart-temperature");
		let humidity_input = document.getElementById("chart-humidity");

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
				}
			}
		});
		let humidity_chart = new Chart(humidity_input, {
			type: "line",
			data: {
				labels: [1, 2, 3, 4, "sjdasj", 6],
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
				}
			}
		});
	});

	return (
		<div className="container">
			<Container className="container-card-info">
				<Row>
					<Col ml={4} offset={4}>
						<Card className="card-info">
							<Card.Body>
								<Card.Title>Nombre:</Card.Title>
								<Card.Text>
									<ul>
										<li>Tipo de planta: </li>
										<li>Fase de Crecimiento: </li>
										<li>Temperatura ideal: °C</li>
										<li>Desviación temperatura: %</li>
										<li>Humedad ideal: %</li>
										<li>Desviación húmedad: %</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
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
