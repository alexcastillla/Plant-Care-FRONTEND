import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PlantsInfo = props => {
	const { store, actions } = useContext(Context);
	const pepe = useParams();
	console.log(pepe, "hola soy tu pepe");
	let newRoom = [];
	let newPlantArray = [];

	const findRoomFuction = () => {
		let newRoomArray = "";
		for (let index = 0; index < store.room.length; index++) {
			if (store.room[index].name_room == pepe.roomId) {
				newRoomArray = store.room[index];
			}
		}
		return newRoom.push(newRoomArray);
	};
	console.log(newRoom, "soy la room");

	return (
		<div className="container mt-5">
			<p>Hola</p>
			{/* <ul className="list-group">
				<span>
					<h1>Name: {findRoomFuction().name_room}</h1>
				</span>
			</ul>
			<Link to="/username">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};
