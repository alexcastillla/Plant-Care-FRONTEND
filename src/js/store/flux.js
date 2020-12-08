const url = "https://plant-and-care.herokuapp.com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			types: [],
			grows: [],
			plants: [
				{
					id: 1,
					id_room: 1,
					name_plant: "Rosalia",
					name_room: "Habitacion",
					tipo_plant: "Exterior",
					grow_phase: "Germinación",
					sensor_number: "111",
					humidity_max_ideal: 85,
					humidity_min_ideal: 80,
					temperature_max_ideal: 38,
					temperature_min_ideal: 3,
					humidity_sensor: 83,
					temperature_sensor: 24
				},
				{
					id: 2,
					id_room: 1,
					name_plant: "Pepa",
					name_room: "Habitacion",
					tipo_plant: "Interior",
					grow_phase: "Crecimiento",
					sensor_number: "112",
					humidity_max_ideal: 70,
					humidity_min_ideal: 60,
					temperature_max_ideal: 24,
					temperature_min_ideal: 10,
					humidity_sensor: 50,
					temperature_sensor: 22
				},
				{
					id: 3,
					id_room: 2,
					name_plant: "Lucia",
					name_room: "Terraza",
					tipo_plant: "Exterior",
					grow_phase: "Maduración",
					sensor_number: "113",
					humidity_max_ideal: 50,
					humidity_min_ideal: 20,
					temperature_max_ideal: 38,
					temperature_min_ideal: 3,
					humidity_sensor: 83,
					temperature_sensor: 24
				}
			],
			room: [
				{
					id: 1,
					name_room: "Habitación"
				},
				{
					id: 2,
					name_room: "Terraza"
				}
			]
		},
		actions: {
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
							setStore(types => [...types, type]);
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
							setStore(grows => [...grows, grow]);
						});
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			createRoom: nameRoom => {
				fetch(url.concat("/user/", getStore().currentUser, "/rooms"), {
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
				fetch(url.concat("/user/", getStore().currentUser, "/rooms"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(json => {
						setStore({ room: result });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},

			createPlant: (namePlant, locationPlant, typePlant, growPlant, sensorPlant) => {
				fetch(url.concat("/user/", getStore().currentUser, "/rooms/", locationPlant, "/plants"), {
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
				fetch(url.concat("/user/", getStore().currentUser, "/plants"))
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(json => {
						setStore({ plants: result });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
		}
	};
};

export default getState;
