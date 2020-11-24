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
				console.log(store.room[index].plants[0].name_plant);
				return (
					<div className="" key={index}>
						<p className="roomsName">{item.name_room}</p>
						{store.room[index].plants.map((it, i) => {
							console.log(it.name_plant, "pepe");
							return <p key={i}>{it.name_plant}</p>;
						})}
					</div>
				);
			})
		);
	});

	return <div>{listItem}</div>;
};
