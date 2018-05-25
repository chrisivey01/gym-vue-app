const API = 'http://54.175.138.146:8080/';
export default{


    calc(weight){
        return fetch(API + 'calc',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: weight
            })
            .then(response => response.json())
            .then((weights) => {
                return weights;
            });
    }
}