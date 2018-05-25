const API = 'http://54.175.138.146:8080/';

export default{



    getWorkouts(userId, workoutType){
        return fetch(API + 'workout' + '/user/' + userId + '/workoutType/' + workoutType)
    }

}