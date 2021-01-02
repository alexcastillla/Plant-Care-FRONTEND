import React, { Fragment, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/loguinpage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Plant from "../../img/plant_nature.png";
import LogoNavbar from "../../img/logo_navbar.jpg";

export const LogUser = () => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState("");
	const [displayerror, setDisplayerror] = useState("Errormesage");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Fragment>
			<Row className="fragment-container">
				<Col className="left-container" xs={12} md={12} lg={6} xl={6}>
					<img className="logo-loguinpage" src={LogoNavbar} />
					<img className="left-container-img" src={Plant} />
				</Col>
				<Col className="right-container" xs={12} md={12} lg={6} xl={6}>
					<Form className="form-loguin">
						<h1 className="tittle-loguin">SIGN IN</h1>
						<Form.Group className="form-loguin-body">
							<p className={displayerror}>The {error} is invalid</p>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								className="email-loguin"
								onChange={e => setEmail(e.target.value)}
								pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
							/>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								className="password-loguin"
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Button
							className="submit-loguin"
							type="submit"
							onClick={() => {
								if (email.length < 5) {
									setError("Username");
									setDisplayerror("Errormesageshow");
								} else if (password.length < 6) {
									setError("Password");
									setDisplayerror("Errormesageshow");
								} else {
									actions.login(email, password);
								}
							}}>
							Sign in
						</Button>
						<h6 className="account-register-question">Haven`t got account? Sign up</h6>
					</Form>
				</Col>
			</Row>
		</Fragment>
	);
};
