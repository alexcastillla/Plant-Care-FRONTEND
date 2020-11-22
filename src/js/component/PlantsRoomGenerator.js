import React, { Component, useState, useEffect, useContext } from "react";
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
					<ul className="" key={index}>
						<li className="roomsName">{item.name_room}</li>
					</ul>
				);
			})
		);
	});

	return <div>{listItem}</div>;
};
