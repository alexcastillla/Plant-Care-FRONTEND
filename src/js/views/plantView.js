import React, { useState, useEffect, useContext, Fragment, useParams } from "react";
import { Context } from "../store/appContext";
import "../../styles/plantView.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Chart from "chart.js";

export const PlantView = () => {
	const { store, actions } = useContext(Context);
	// const params = useParams();
	// console.log(params);

	useEffect(() => {
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
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
	});

	useEffect(() => {
		var ctx = document.getElementById("myChart2");
		var myChart = new Chart(ctx, {
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
			<Container>
				<Row>
					<Col ml={4}>
						<Card>
							<Card.Body>
								<Card.Title>Nombre:</Card.Title>
								<Card.Text>
									<ul>
										<li>Tipo de planta: </li>
										<li>Fase de Crecimiento: </li>
										<li>Temperatura ideal: °C</li>
										<li>Humedad ideal: %</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col ml={4}>
						<canvas className="chart" id="myChart" />
					</Col>
					<Col ml={4}>
						<canvas className="chart2" id="myChart2" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
