import React from "react";
import "../../styles/home.scss";
import logo1 from "../../img/photo1.png";
import logo2 from "../../img/photo2.png";
import logo3 from "../../img/photo3.png";

export const Home = () => (
	<div className="home">
		<div>
			<div>
				<p className="texto-1">“Únete a la revolución de las terrazas”</p>
				<p className="texto-2">
					Tu primera plataforma en la que puedes conectar con tu planta de la manera más fácil y sencilla.
				</p>
				<img className="photo-1" src={logo1} />
			</div>
			<div className="second-section">
				<img className="photo-2" src={logo2} />
				<p className="texto-3">“Porque cada gota cuenta”</p>
			</div>
			<div className="third-section">
				<p className="texto-4">
					Con nuestro sistema queremos mejorar la eficiencia en el ahorro de agua a la vez que os ayudamos a
					mejorar el estado de vuestras plantas.
				</p>
				<img className="photo-3" src={logo3} />
				<p className="texto-5">
					Con un interfaz sencilla e intuitiva, en donde los mas pequeños de la casa pueden participar.
				</p>
			</div>
		</div>
	</div>
);
