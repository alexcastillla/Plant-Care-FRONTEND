const url = "https://plant-and-care.herokuapp.com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: [],
			room: []
		},

		actions: {
			createRoom: nameRoom => {
				fetch(url.concat("/user/<int:user_id>/rooms"), {
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
				fetch(url.concat("/user/<int:user_id>/rooms"))
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
			}
		}
	};
};

export default getState;
