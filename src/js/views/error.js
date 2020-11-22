import React, { Link } from "react";
import Button from "react-bootstrap/Button";
import "../../styles/error.scss";

export const Error = () => (
	<section className="page_404">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="text-center">
						<div className="four_zero_four_bg">
							<p className="text-center ">404</p>
						</div>
						<div className="contant_box_404 mb-3">
							<p>Oops!</p>
							<p>Something is missing...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
