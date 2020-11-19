import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ButtonRoomGenerator = () => {
	const { store, actions } = useContext(Context);
	console.log(store.room, "pepe");
	return (
		<div className="">
			{store.room.map((item, index) => {
				return (
					<div className="" key={index}>
						<li>
							<span>{item.name_room}</span>
						</li>
					</div>
				);
			})}
		</div>
	);
};
