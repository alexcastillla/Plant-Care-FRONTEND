import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ButtonRoomGenerator = () => {
	const { store, actions } = useContext(Context);
	const [listItem, setListItem] = useState("");

	useEffect(() => {
		setListItem(
			store.room.map((item, index) => {
				return (
					<button className="span-room-name" key={index}>
						<p>{item.name_room}</p>
						<i
							className="far fa-times-circle"
							onClick={event => {
								console.log(event, "soy el evento");
								if (
									window.confirm(
										"¿Estás seguro? Si confirmas, se eliminará tanto la ubicación como sus plantas asociadas."
									)
								)
									actions.deleteRoom(item.id);
							}}
						/>
					</button>
				);
			})
		);
	});

	return <div className="rooms-mapped">{listItem}</div>;
};
