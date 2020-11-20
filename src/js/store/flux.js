const url = "";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: [],
			room: [
				{
					name_room: "Habitación",
					plants: [
						{
							Name_plants: "Petunia"
						}
					]
				},
				{
					name_room: "Terraza",
					plants: [
						{
							Name_plants: "Rosalia"
						}
					]
				},
				{
					name_room: "Salón",
					plants: [
						{
							Name_plants: "Juanito"
						}
					]
				}
			]
		},
		actions: {
			addRoom: roomName => {
				console.log(roomName, "juan prueba");
				getStore().room.push({ name_room: roomName, plants: [] });
				// const array = getStore().room;
				// setStore([...array], array.push(roomName));
			},
			addRoomAPI: roomName => {
				fetch(url + "room/", {
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
				fetch(url + "room/")
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
