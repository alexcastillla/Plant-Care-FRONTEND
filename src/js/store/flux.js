const url = "https://3000-b06ba97d-2099-4d04-989d-17e1c653e800.ws-eu03.gitpod.io/";

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
			add_new_user: (user, emailUSer, passwordUser, locationUser) => {
				getStore().username.push(user);
				getStore().email.push(emailUSer);
				getStore().password.push(passwordUser);
				getStore().location.push(locationUser);
			},

			addUser: (username, email, password, location) => {
				fetch(url + "create-account/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
						location: location
					})
				});
			},

			login: async (email, password) => {
				let loginurl = url.concat("login");
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Basic ZW1haWxAaG90bWFpbC5jb20xMjM6MTIzNDU2NzQ=");
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({ email: email, password: password });

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					console.log("working");
					let res = await fetch(loginurl, requestOptions);
					let result = await res.json();
					let token = await result;
					setStore({ token: token[0].token });
				} catch (error) {
					console.log("error", error);
				}
			}
		}
	};
};
export default getState;
