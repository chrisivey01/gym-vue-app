const API = 'http://localhost:8080/';

export default {

    sendWorkout(workout ) {
        return fetch(API + '/workout',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workout)
            })
            .then(response => response.json())

            .then(works => {
                return works;
            });
    }
}

