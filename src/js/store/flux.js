const url = "https://plant-and-care.herokuapp.com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            currentUser: null,
            types: [],
            grows: []
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

				createPlant: (namePlant, locationPlant, typePlant, growPlant, sensorPlant) => {
				fetch(url.concat("/user/", getStore().currentUser, "/rooms/", locationPlant, "/plants"), {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(
                        {
                            id_room: locationPlant,
                            name_plant: namePlant,
                            type_plant: typePlant,
                            grow_phase: growPlant,
                            sensor_number: sensorPlant
                        }
                    )
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
			}
		}
	};
};

export default getState;
