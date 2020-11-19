import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardpeoples = () => {
	const { store, actions } = useContext(Context);

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