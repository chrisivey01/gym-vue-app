const API = 'http://localhost:8080/';
let loggedIn = false;

export default{

    login(username, password){
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


        // return new Promise(function(resolve, reject) {
        //     if(username == "chris") {
        //         loggedIn = true;
        //     }else{
        //         loggedIn = false;
        //     }
        //     resolve(loggedIn);
        // });
    },

    loggedIn(){
        return loggedIn;
    }
}