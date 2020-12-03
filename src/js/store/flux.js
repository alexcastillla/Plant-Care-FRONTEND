const url = "";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: [],
			plantas: [],
			room: [
				{
					id: 1,
					name_room: "Habitación",
					plants: [
						{
							id: 1,
							id_room: 1,
							name_plant: "Rosalia",
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
							tipo_plant: "Interior",
							grow_phase: "Crecimiento",
							sensor_number: "112",
							humidity_max_ideal: 70,
							humidity_min_ideal: 60,
							temperature_max_ideal: 24,
							temperature_min_ideal: 10,
							humidity_sensor: 50,
							temperature_sensor: 22
						}
					]
				},
				{
					id: 2,
					name_room: "Terraza",
					plants: [
						{
							id: 3,
							id_room: 2,
							name_plant: "Lucia",
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
					]
				}
			]
		},
		actions: {
			addPlant: plant => {
				getStore().plantas.push(plant);
				// const array = getStore().room;
				// setStore([...array], array.push(roomName));
			},
			addRoom: roomName => {
				console.log(roomName, "juan prueba");
				getStore().room.push({ name_room: roomName, plants: [] });
				// const array = getStore().room;
				// setStore([...array], array.push(roomName));
			},
			addRoomAPI: roomName => {
				fetch(url + "/new-room", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name_room: rommName,
						username: getStore().currentUser.id
					})
				}).then(() => {
					getActions().getRoom();
				});
			},
			getRoomAPI: () => {
				fetch(url + "username/new-room")
					.then(res => res.json())
					.then(result => {
						console.log("getting room", result), setStore({ room: result });
					});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
