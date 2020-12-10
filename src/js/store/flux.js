const url = "";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			curentUser: null
		},

		actions: {
			addUser: (username, email, password, location) => {
				fetch(url.concat("/register"), {
					method: "POST",
					headers: { "Content-type": "application/json/user" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
						location: location
					})
				});
			}
		}
	};
};
export default getState;
