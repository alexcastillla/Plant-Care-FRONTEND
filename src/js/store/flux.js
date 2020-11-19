const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			username: [],
			email: [],
			password: [],
			location: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			add_new_user: user => {
				getStore().username.push(user);
				console.log(user, "name");
			},

			add_new_email: emailUSer => {
				getStore().email.push(emailUSer);
				console.log(emailUSer, "example@hotail.com");
			},

			add_new_password: passwordUser => {
				getStore().password.push(passwordUser);
				console.log(passwordUSer, "1234");
			},

			add_new_location: locationUser => {
				getStore().location.push(locationUser);
				console.log(locationUser, honolulu);
			}

			// 	addUser: (username, email, password, location) => {
			// 		fetch(url + "create-account/", {
			// 			method: "Post",
			// 			headers: { "Content-Type": "application/json" },
			// 			body: JSON.stringify({
			// 				username: username,
			// 				email: email,
			// 				password: password,
			// 				location: location
			// 			})
			// 		}).then(() => {
			// 			getActions().getUser();
			// 		});
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
	};
};
export default getState;
