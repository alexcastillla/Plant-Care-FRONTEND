import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Error } from "./views/error";
import { LogUser } from "./views/loguin";
import { PlantsInfo } from "./views/single";
import { Userview } from "./views/userview";
import { PlantSingleStatistic } from "./views/plantSingleStatistic.jsx";

import injectContext from "./store/appContext";
import { NavbarUser } from "./component/navbar_user.jsx";
import { NavbarHome } from "./component/navbar_home.jsx";
import { Footer } from "./component/footer.jsx";

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
							<Footer />
						</Route>
						<Route exact path="/loguin">
							<LogUser />
						</Route>
						<Route exact path="/username/view">
							<NavbarUser />
							<Userview />
							<Footer />
						</Route>
						<Route exact path="/username/:plantName">
							<NavbarUser />
							<PlantSingleStatistic />
							<Footer />
						</Route>
						<Route>
							<NavbarUser />
							<Error />
							<Footer />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
