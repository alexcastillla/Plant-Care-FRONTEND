import React from "react";
import "../../styles/home.scss";
import { Profile } from "../component/userprofile";

export const Home = () => (
	<div className="text-center mt-5">
		{/* // 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a> */}
		<Profile />
		{/* <Registermodal /> */}
	</div>
);
