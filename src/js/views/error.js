import React, { Link } from "react";
import Button from "react-bootstrap/Button";
import "../../styles/error.scss";

export const Error = () => (
	<section className="page_404">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 ">
					<div className="text-center">
						<div className="four_zero_four_bg">
							<h1 className="text-center ">404</h1>
						</div>
						<div className="contant_box_404 mb-3">
							<h3 className="h2">Opps! Look like you are lost</h3>
							<h3>The page you are looking for</h3>
							<h3>is not avaible!</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
