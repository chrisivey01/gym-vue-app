<template>
    <div>
        <div class="container">
            <div class="workoutContainer">
                <div>
                    <label>Add Workout</label>
                </div>
                <div>
                    <div>
                        <label>Date</label>
                        <datepicker v-model="date" :format="format"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label>Set</label>
                        <span @click="test()"><plus-circle-outline-icon /></span>
                        <div v-for="(workout, index) in workouts" :key="index">
                            <label>Set</label>
                            <input id="weight" v-model="weight[workout]" placeholder="Weight" />
                            <input id="reps" v-model="reps[workout]" placeholder="Reps"  />
                        </div>
                    </div>

                    </div>
                <button @click="submitWorkout()"> Submit </button>
            </div>


            <div class="liftContainer">
                <b-dropdown id="ddown1" v-bind:text=lift class="m-md-2">
                    <b-dropdown-item @click="squatRepo()">Squat</b-dropdown-item>
                    <b-dropdown-item @click="benchRepo()">Bench</b-dropdown-item>
                    <b-dropdown-item @click="deadLiftRepo()">Deadlift</b-dropdown-item>
                </b-dropdown>
                <div>
                    <div v-if="squat === true">
                        <div class="displayLifts">
                            <ul class="list-group"  v-for="item in items">
                                <li class="list-group-item">
                                    Workout Date: {{getMyDate(item.date)}}
                                    <br />
                                    Workout Type: {{item.workoutType}}
                                    <br />
                                    <div v-for="set in item.workoutSetList">
                                        Weight: {{set.weight}} Reps: {{set.reps}}
                                        <br />
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div v-else-if="bench === true">
                        <div class="displayLifts">
                            <ul class="list-group"  v-for="item in items">
                                <li class="list-group-item">
                                    Workout Date: {{getMyDate(item.date)}}
                                    <br />
                                    Workout Type: {{item.workoutType}}
                                    <br />
                                    <div v-for="set in item.workoutSetList">
                                        Weight: {{set.weight}} Reps: {{set.reps}}
                                        <br />
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div v-else-if="deadLift === true">
                        <div class="displayLifts">
                            <ul class="list-group"  v-for="item in items">
                                <li class="list-group-item">
                                    Workout Date: {{getMyDate(item.date)}}
                                    <br />
                                    Workout Type: {{item.workoutType}}
                                    <br />
                                    <div v-for="set in item.workoutSetList">
                                        Weight: {{set.weight}} Reps: {{set.reps}}
                                        <br />
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PlusCircleOutlineIcon from "vue-material-design-icons/plus-circle-outline.vue"
    import liftRepo from '../liftRepo'
    import getWorkouts from '../getWorkouts'
    import Datepicker from 'vuejs-datepicker-better';



    export default {
        components: {
            PlusCircleOutlineIcon,
            Datepicker
        },
        data(){
            return{
                lift:'Select your lift',
                squat:false,
                bench:false,
                deadLift:false,

                workouts: [
                    'set0'
                ],

                date:'',
                weight:[],
                reps:[],
                add:0,

                format: "MM-dd-yyyy",
                items:[]
            }
        },
        methods:{
            getMyDate(myDate){
                return myDate.substr(5,2) + '-' + myDate.substr(8,2) + '-' + myDate.substr(0,4);
            },
            squatRepo(){
                this.squat = true;
                this.bench = false,
                this.deadLift = false,
                this.lift = "Squat"

                getWorkouts.getWorkouts(1, this.lift).then(data => {
                    data.json().then(items => this.items = items)
                });
            },
            benchRepo(){
                this.bench = true;
                this.squat = false,
                this.deadLift = false,
                this.lift = "Bench"

                getWorkouts.getWorkouts(1, this.lift).then(data => {
                    data.json().then(items => this.items = items)
                });

            },
            deadLiftRepo(){
                this.deadLift = true;
                this.bench = false;
                this.squat = false;
                this.lift = "Deadlift"

                getWorkouts.getWorkouts(1, this.lift).then(data => {
                    data.json().then(items => this.items = items)
                });
            },



            test(){
                this.add++;
                this.workouts.push("set"+this.add);
            },

            submitWorkout(){
                let i = 0;
                let workoutSetList = [];
                let weightsKeys = Object.keys(this.weight)
                let repsKeys = Object.keys(this.reps);


                for(i; i < weightsKeys.length; i++){
                    workoutSetList.push({
                        weight: this.weight[weightsKeys[i]],
                        reps: this.reps[repsKeys[i]]
                    })
                }

                let workout = {
                    'userId' : 1,
                    'date' : this.date,
                    'workoutType' : this.lift,
                    'workoutSetList' : workoutSetList
                }

                liftRepo.sendWorkout(workout);
            }
        }

    }
</script>

<style scoped>

    .workoutContainer{
        float:left;
    }

</style>