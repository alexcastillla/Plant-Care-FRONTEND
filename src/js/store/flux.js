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
                ]},
                
		actions: {
                    addUser: (username, email, password, location) => {
                    fetch(url + "create-account/", {
                        method: "Post",
                        headers: { "Content-Type" : "application/json" },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password,
                            location: location
                        })
                    }).then(() => {
                        getActions().getUser();
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
