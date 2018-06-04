const API = 'http://54.175.138.146:8080/';
// const API = 'http://localhost:8080/';

let loggedIn = false;

export default {

    login(username, password) {
        return fetch(API + 'login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(response => response.json())
            .then((isSuccess) => {
                loggedIn = isSuccess;

                return loggedIn;
            });
    },

    loggedIn() {
        return loggedIn;
    },

    createAccount(username, password) {
        return fetch(API + 'create-login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(response => response.json())
    }
}