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


            <div class="setContainer">
                <div>
                    <label>Sets</label>
                </div>
                <div>
                    <b-dropdown  v-bind:text=counter class="m-md-2">
                        <b-dropdown-item @click="twoSets()">2</b-dropdown-item>
                        <b-dropdown-item @click="threeSets()">3</b-dropdown-item>
                        <b-dropdown-item @click="fourSets()">4</b-dropdown-item>
                        <b-dropdown-item @click="fiveSets()">5</b-dropdown-item>
                    </b-dropdown>
                </div>

                <div>
                    <div v-if="show1st2nd === 'A'">
                        <label>1st Set</label>
                        <input v-model="firstSet"/>
                    </div>
                    <div v-if="show1st2nd === 'A'">
                        <label>2nd Set</label>
                        <input/>
                    </div>
                    <div v-if="show3rd === 'B'">
                        <label>3rd Set</label>
                        <input/>
                    </div>
                    <div v-if="show4th === 'C'">
                        <label>4th Set</label>
                        <input/>
                    </div>
                    <div v-if="show5th === 'D'">
                        <label>5th Set</label>
                        <input/>
                    </div>
                    <div v-if="show1st2nd === 'A'">
                        <button @click="test()"> Submit </button>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import SquatTable from './SquatTable';

    export default {
        components: {
            SquatTable
        },
        data:function(){
            return{
                lift:'Select your lift',
                squat:false,
                bench:false,
                deadLift:false,


                counter: 'Set Counter',
                show1st2nd:'',
                show3rd:'',
                show4th:'',
                show5th:'',

                firstSet:''


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
            twoSets(){
                this.counter = "2 Sets",
                    this.show1st2nd = 'A',
                    this.show3rd = '',
                    this.show4th = '',
                    this.show5th = ''
            },
            threeSets(){
                this.counter = "3 Sets",
                    this.show1st2nd = 'A',
                    this.show3rd = 'B',
                    this.show4th = '',
                    this.show5th = ''
            },
            fourSets(){
                this.counter = "4 Sets",
                    this.show1st2nd = 'A',
                    this.show3rd = 'B',
                    this.show4th = 'C',
                    this.show5th = ''
            },
            fiveSets(){
                this.counter = "5 Sets",
                    this.show1st2nd = 'A',
                    this.show3rd = 'B',
                    this.show4th = 'C',
                    this.show5th = 'D'
            },

            test(){
                alert(this.firstSet)
            }
        }

    }
</script>

<style scoped>

    .setContainer{
        float:left;
    }

</style>