<template>
    <div>
        <div class="container">
            <div class="liftContainer">
                <b-dropdown id="ddown1" v-bind:text=lift class="m-md-2">
                    <b-dropdown-item @click="squatRepo()">Squat</b-dropdown-item>
                    <b-dropdown-item @click="benchRepo()">Bench</b-dropdown-item>
                    <b-dropdown-item @click="deadLiftRepo()">Deadlift</b-dropdown-item>
                </b-dropdown>
                <div>
                    <div v-if="squat === true">
                        <squat-table/>
                    </div>
                    <div v-else-if="bench === true">
                        bench
                    </div>

                    <div v-else-if="deadLift === true">
                        deadlift

                    </div>
                </div>
            </div>


            <div class="workoutContainer">
                <div>
                    <label>Add Workout</label>
                </div>
                <div>
                    <div>
                        <label>Date</label>
                        <input v-model="date"/>
                        <button>Date Picker</button>
                    </div>
                </div>



                <!--hmmm-->
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
        </div>
    </div>
</template>

<script>
    import SquatTable from './SquatTable';
    import PlusCircleOutlineIcon from "vue-material-design-icons/plus-circle-outline.vue"
    import liftRepo from '../liftRepo'


    export default {
        components: {
            SquatTable,
            PlusCircleOutlineIcon
        },
        data(){
            return{
                lift:'Select your lift',
                squat:false,
                bench:false,
                deadLift:false,

                workouts: [
                    'set'
                ],

                date:'',
                weight:[],
                reps:[],
                add:0
            }
        },
        methods:{
            squatRepo(){
                this.squat = true;
                this.bench = false,
                this.deadLift = false,
                this.lift = "Squat"

            },
            benchRepo(){
                this.bench = true;
                this.squat = false,
                this.deadLift = false,
                this.lift = "Bench"

            },
            deadLiftRepo(){
                this.deadLift = true;
                this.bench = false;
                this.squat = false;
                this.lift = "Deadlift"
            },


            // setWeight(event,index){
            //     var workout = event.target.value;
            //     workout.workout = workout
            // },
            //
            // setReps(event,workout){
            //     var workout = event.target.value;
            //     workout.workout = workout
            // },




            test(){
                this.add++;
                this.workouts.push("set"+this.add);
            },

            submitWorkout(){
                let i = 0;

                for(i; i<Object.keys(this.reps).length; i++){
                    console.log(this.reps.set+i);
                }
                // for(let rep of this.reps){
                //     console.log(rep)
                // }
                // let workoutSetList =
                //     [{
                //     reps:this.reps.set,
                //     weights:this.weight.set
                //     }]
                // // [{
                // //     reps: 3,
                // //     weight: 225
                // // },{
                // //     reps: 3,
                // //     weight: 235
                // // },{
                // //     reps: 3,
                // //     weight: 245
                // // }]
                //
                // let workout = {
                //     'userId' : 1,
                //     'date' : new Date(),
                //     'workoutType' : this.lift,
                //     'workoutSetList' : workoutSetList
                // }
                //
                // liftRepo.sendWorkout(workout);
            }
        }

    }
</script>

<style scoped>

    .workoutContainer{
        float:left;
    }

</style>