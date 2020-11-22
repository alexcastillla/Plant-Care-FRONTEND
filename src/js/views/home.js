import React from "react";
import logo2 from "../../img/logo2.jpg";
import "../../styles/home.scss";
import { Registermodal } from "../component/RegisterModal";
import "../../styles/registermodal.scss";

export const Home = () => (
	<div className="text-center mt-5">
		{/* // 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a> */}
		<Registermodal />
	</div>
);
