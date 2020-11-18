import React from "react";
import "../../styles/userview.scss";
import { Pepocho } from "../component/roomPanel";

export const Userview = () => {
	return (
		<div className="mt-0">
			<div className="text-center mt-0 room-panel">
				<h1>Hola soy el panel en donde van a ir las estancias!</h1>
				<Pepocho />
			</div>
			<div className="text-center mt-5 card-panel">
				<h1>Hola soy el panel en donde van a ir las plantas!</h1>
			</div>
		</div>
	);
};
