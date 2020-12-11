import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const url = "https://3000-bd7c9a83-b002-48f6-a911-14832ce83084.ws-eu03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logedUser: null,
			types: [],
			grows: [],
			plants: [
				// {
				// 	id: 1,
				// 	id_room: 1,
				// 	name_plant: "Rosalia",
				// 	name_room: "Habitacion",
				// 	tipo_plant: "Exterior",
				// 	grow_phase: "Germinación",
				// 	sensor_number: "111",
				// 	humidity_max_ideal: 85,
				// 	humidity_min_ideal: 80,
				// 	temperature_max_ideal: 38,
				// 	temperature_min_ideal: 3,
				// 	humidity_sensor: 83,
				// 	temperature_sensor: 24
				// },
				// {
				// 	id: 2,
				// 	id_room: 1,
				// 	name_plant: "Pepa",
				// 	name_room: "Habitacion",
				// 	tipo_plant: "Interior",
				// 	grow_phase: "Crecimiento",
				// 	sensor_number: "112",
				// 	humidity_max_ideal: 70,
				// 	humidity_min_ideal: 60,
				// 	temperature_max_ideal: 24,
				// 	temperature_min_ideal: 10,
				// 	humidity_sensor: 50,
				// 	temperature_sensor: 22
				// },
				// {
				// 	id: 3,
				// 	id_room: 2,
				// 	name_plant: "Lucia",
				// 	name_room: "Terraza",
				// 	tipo_plant: "Exterior",
				// 	grow_phase: "Maduración",
				// 	sensor_number: "113",
				// 	humidity_max_ideal: 50,
				// 	humidity_min_ideal: 20,
				// 	temperature_max_ideal: 38,
				// 	temperature_min_ideal: 3,
				// 	humidity_sensor: 83,
				// 	temperature_sensor: 24
				// }
			],
			room: [
				// {
				// 	id: 1,
				// 	name_room: "Habitación"
				// },
				// {
				// 	id: 2,
				// 	name_room: "Terraza"
				// }
			]
		},
		actions: {
			addUser: (username, email, password, location) => {
				fetch(url.concat("/register"), {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
						location: location
					})
				})
					.then(response => response.text())
					.then(answer => {
						console.log("Success ", 200);
					});
			},

			// login: async (email, password) => {
			// 	let loginurl = url.concat("login");
			// 	var myHeaders = new Headers();
			// 	myHeaders.append("Authorization", "Basic ZW1haWxAaG90bWFpbC5jb20xMjM6MTIzNDU2NzQ=");
			// 	myHeaders.append("Content-Type", "application/json");

			// 	var raw = JSON.stringify({ email: email, password: password });

			// 	var requestOptions = {
			// 		method: "POST",
			// 		headers: myHeaders,
			// 		body: raw,
			// 		redirect: "follow"
			// 	};

			// 	try {
			// 		console.log("working");
			// 		let res = await fetch(loginurl, requestOptions);
			// 		let result = await res.json();
			// 		let token = await result;
			// 		setStore({ token: token[0].token });
			// 	} catch (error) {
			// 		console.log("error", error);
			// 	}
			// },

			login: (email, password) => {
				fetch(url.concat("/login"), {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log(response, "holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(answerDownload => {
						console.log(answerDownload);
						var token = answerDownload[0].token;
						localStorage.setItem("x-access-token", token);
						getActions().getLocalStorageToken();
						getActions().logedStore();
						window.location.replace("/username/view");
						console.log("Success: ", 200);
					})
					.catch(error => {
						console.log("User not found", error);
					});
			},

			getLocalStorageToken: () => {
				var token = localStorage.getItem("x-access-token");
				const decoded = jwt_decode(token);
				localStorage.setItem("logedUser", decoded.id);
				getActions().setLoged(decoded.id);
			},

			logedStore: () => {
				if (getStore().logedUser == null) {
					return localStorage.getItem("logedUser");
				} else {
					return getStore().logedUser;
				}
			},

			setLoged: id => {
				localStorage.getItem("logedUser");
				setStore((getStore().logedUser = localStorage.getItem("logedUser")));
			},

			logOut: () => {
				localStorage.removeItem("x-access-token");
				localStorage.removeItem("logedUser");
				setStore((getStore().logedUser = null));
			},

			getTypesOptions: () => {
				fetch(url.concat("/types"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(respAsJson => {
						respAsJson.map(type => {
							// setStore(types => [...types, type]);
							setStore({ types: respAsJson });
						});
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},

			getGrowOptions: () => {
				fetch(url.concat("/grows"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(respAsJson => {
						respAsJson.map(grow => {
							// setStore(grows => [...grows, grow]);
							setStore({ grows: respAsJson });
							// setStore({ room: json });
						});
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},

			createRoom: nameRoom => {
				fetch(url.concat("/user/", getActions().logedStore(), "/rooms"), {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name_room: nameRoom
					})
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(() => {
						getActions().getRoom();
					})
					.catch(error => {
						console.log("Creating contact, error status: ", error);
					});
			},

			getRoom: () => {
				fetch(url.concat("/user/", getActions().logedStore(), "/rooms"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(json => {
						setStore({ room: json });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},

			deleteRoom: id => {
				console.log(id, "soy el id que quiero borrar");
				fetch(url.concat("/user/", getActions().logedStore(), "/rooms/", id), {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(() => {
						console.log("estoy cogiendo de nuevo los rooms");
						getActions().getRoom();
					})
					.catch(error => {
						console.log("Creating contact, error status: ", error);
					});
			},

			createPlant: (namePlant, locationPlant, typePlant, growPlant, sensorPlant) => {
				fetch(url.concat("/user/", getActions().logedStore(), "/rooms/", locationPlant, "/plants"), {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						id_room: locationPlant,
						name_plant: namePlant,
						type_plant: typePlant,
						grow_phase: growPlant,
						sensor_number: sensorPlant
					})
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(() => {
						getActions().getPlant();
					})
					.catch(error => {
						console.log("Creating plant, error status: ", error);
					});
			},

			getPlants: () => {
				fetch(url.concat("/user/", getActions().logedStore(), "/plants"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(json => {
						setStore({ plants: json });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			}
		}
	};
};
export default getState;
