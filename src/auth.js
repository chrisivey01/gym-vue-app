// Our authentication endpoint
const API = 'http://localhost:8080/';

// Determines if the current user is logged in
let loggedIn = false;

export default {

    login(username, password) {
        /*
        return fetch(API + 'login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:this.username,
                password:this.passWord
            })
        })
        .then(response => response.json())
        .then((isSuccess) => {
            loggedIn = isSuccess;
            return loggedIn;
        });
        */
       return new Promise(function(resolve, reject) {
           loggedIn = true;
           resolve(loggedIn);
       });

    },

    loggedIn() {
        return loggedIn;
    }

}