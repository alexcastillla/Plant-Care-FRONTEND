import React from "react";
import "../../styles/userview.scss";
import { Pepocho } from "../component/roomPanel";

export const Userview = () => {
	return (
		<div>
			<div className="text-center mt-5 room-panel">
				<h1>Hola soy el panel en donde van a ir las estancias!</h1>
				<Pepocho />
			</div>
			<div className="text-center mt-5 card-panel">
				<h1>Hola soy el panel en donde van a ir las plantas!</h1>
			</div>
		</div>
	);
};
