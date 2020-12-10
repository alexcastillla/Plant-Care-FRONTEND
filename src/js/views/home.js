import React from "react";
import "../../styles/home.scss";
import "../../styles/registermodal.scss";
import Row from "react-bootstrap/Row";
import logo1 from "../../img/photo1.png";
import logo2 from "../../img/logo2.jpg";
import logo3 from "../../img/photo3.png";
import logo4 from "../../img/photo4.png";
import logo5 from "../../img/photo5.png";
import logo6 from "../../img/photo6.png";
import { Registermodal } from "../component/RegisterModal";

export const Home = () => (
	<div className="home">
		<div>
			<div className="first-section">
				<div>
					<p className="texto-1">“Únete a la revolución de las terrazas”</p>
					<p className="texto-2">
						Tu primera plataforma en la que puedes conectar con tu planta de la manera más fácil y sencilla.
					</p>
				</div>
				<img className="photo-1" src={logo1} />
			</div>
			<div className="second-section">
				<p className="texto-3">“Porque cada gota cuenta”</p>
			</div>
			<div className="third-section-row">
				<img className="photo-4" src={logo4} />
				<p className="texto-5">
					Con nuestro sistema queremos mejorar la eficiencia en el ahorro de agua a la vez que os ayudamos a
					mejorar el estado de vuestras plantas.
				</p>
			</div>
			<div className="third-section-row">
				<p className="texto-4">
					Con un interfaz sencilla e intuitiva, en donde los mas pequeños de la casa pueden participar.
				</p>
				<img className="photo-3" src={logo3} />
			</div>
			<div className="fourth-section-row">
				<img className="photo-5" src={logo5} />
				<div>
					<ul className="lista-1">
						<li>Identifica tu planta</li>
						<li>Controla su temperatura</li>
						<li>Controla su humedad</li>
						<li>Ubícala fácilmente</li>
						<li>Accede a todas sus estadísticas</li>
					</ul>
				</div>
			</div>
			<div className="fith-section-row">
				<p className="texto-6">No esperes más, empieza ahora mismo</p>
        <Registermodal />
				<img className="photo-6" src={logo6} />
			</div>
		</div>
	</div>
);
