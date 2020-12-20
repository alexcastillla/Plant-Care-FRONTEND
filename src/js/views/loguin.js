import React, { Fragment, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/loguinpage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const LogUser = () => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState("");
	const [displayerror, setDisplayerror] = useState("Errormesage");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Fragment>
			<Row className="p-5 fragment-container">
				<Col xs={12} md={12} lg={{ span: 4, offset: 2 }} xl={{ span: 4, offset: 2 }}>
					<p className="tittle-message">Hello, Friend!</p>
					<p>Enter your personal details and start journey with us</p>
				</Col>
				<Col xs={12} md={12} lg={4} xl={4}>
					<Form className="form-loguin pl-4 pr-4">
						<p className={displayerror}>The {error} is invalid</p>
						<Form.Group className="form-inputs">
							<h1 className="mb-4">Sign In</h1>
							<Form.Label>Email address</Form.Label>
							<Form.Control className="email" onChange={e => setEmail(e.target.value)} />
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								className="psswd"
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Button
							className="Save-login btn-block"
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
							Send
						</Button>
					</Form>
				</Col>
			</Row>
		</Fragment>
	);
};
