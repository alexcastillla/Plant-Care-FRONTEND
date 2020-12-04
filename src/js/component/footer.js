import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="footer-container">
			<p className="mt-3">
				Made with <i className="fa fa-heart text-danger" /> by Aurelian & Alexander
			</p>
			<p>Project Designed in 2020</p>
			<ul className="list-unstyled list-inline text-center">
				<li className="list-inline-item">
					<a className="btn-floating btn-fb mx-1">
						<i className="fab fa-facebook-f fa-lg"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-tw mx-1">
						<i className="fab fa-twitter fa-lg"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-gplus mx-1">
						<i className="fab fa-google-plus-g fa-lg"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-li mx-1">
						<i className="fab fa-linkedin-in fa-lg"> </i>
					</a>
				</li>
			</ul>
		</div>
	</footer>
);
