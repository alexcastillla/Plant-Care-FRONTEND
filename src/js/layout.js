import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Error } from "./views/error";
import { PlantsInfo } from "./views/single";
import { Userview } from "./views/userview";
import { PlantView } from "./views/plantView";

import injectContext from "./store/appContext";

import { NavbarUser } from "./component/navbar_user";
import { NavbarHome } from "./component/navbar_home";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<NavbarHome />
							<Home />
						</Route>
						<Route exact path="/username/view">
							<NavbarUser />
							<Userview />
							{/* <Demo /> */}
						</Route>
						<Route exact path="/username/view/plant">
							<NavbarUser />
							<PlantView />
						</Route>
						<Route exact path="/username/:roomId/:plantId">
							<NavbarUser />
							<PlantsInfo />
						</Route>
						<Route>
							<NavbarUser />
							<Error />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
