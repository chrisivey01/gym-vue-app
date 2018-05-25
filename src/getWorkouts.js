const API = 'http://localhost:8080/';

export default{



    getWorkouts(userId, workoutType){
        return fetch(API + 'workout' + '/user/' + userId + '/workoutType/' + workoutType)
    }

}