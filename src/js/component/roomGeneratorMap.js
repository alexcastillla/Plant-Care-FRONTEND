import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/modalRoomAdd.scss";
import { Link } from "react-router-dom";

export const ButtonRoomGenerator = () => {
	const { store, actions } = useContext(Context);
	console.log(store.room, "im the local store");
	const [listItem, setListItem] = useState("");

	useEffect(() => {
		setListItem(
			store.room.map((item, index) => {
				return (
					<button className="span-room-name" key={index}>
						<p className="m-0">{item.name_room}</p>
					</button>
				);
			})
		);
	});

	return <div>{listItem}</div>;
};
