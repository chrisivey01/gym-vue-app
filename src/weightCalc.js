const API = 'http://localhost:8080/';
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