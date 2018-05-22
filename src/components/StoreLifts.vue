<!--<template>-->
    <!--<div>-->
        <!--<div class="setCounter">-->
            <!--<div>-->
                <!--<label>Set</label>-->
            <!--</div>-->
            <!--<div>-->
                <!--<b-dropdown id="ddown1" v-bind:text=counter class="m-md-2">-->
                    <!--<b-dropdown-item @click="twoSets()">2</b-dropdown-item>-->
                    <!--<b-dropdown-item @click="threeSets()">3</b-dropdown-item>-->
                    <!--<b-dropdown-item @click="fourSets()">4</b-dropdown-item>-->
                    <!--<b-dropdown-item @click="fiveSets()">5</b-dropdown-item>-->
                <!--</b-dropdown>-->
            <!--</div>-->
            <!--<div>-->
                <!--<div v-if="show1st2nd === 'A'">-->
                    <!--<label>1st Set</label>-->
                    <!--<input v-model="firstSet"/>-->
                <!--</div>-->
                <!--<div v-if="show1st2nd === 'A'">-->
                    <!--<label>2nd Set</label>-->
                    <!--<input/>-->
                <!--</div>-->
                <!--<div v-if="show3rd === 'B'">-->
                    <!--<label>3rd Set</label>-->
                    <!--<input/>-->
                <!--</div>-->
                <!--<div v-if="show4th === 'C'">-->
                    <!--<label>4th Set</label>-->
                    <!--<input/>-->
                <!--</div>-->
                <!--<div v-if="show5th === 'D'">-->
                    <!--<label>5th Set</label>-->
                    <!--<input/>-->
                <!--</div>-->
                <!--<div v-if="show1st2nd === 'A'">-->
                    <!--<button> Submit </button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import PlusCircleOutlineIcon from "vue-material-design-icons/plus-circle-outline";-->

    <!--export default {-->
        <!--components: {PlusCircleOutlineIcon},-->
        <!--name: "store-lifts",-->
        <!--firstSet:'',-->
        <!--data:function(){-->
            <!--return {-->
                <!--counter: 'Set Counter',-->
                <!--show1st2nd:'',-->
                <!--show3rd:'',-->
                <!--show4th:'',-->
                <!--show5th:'',-->

                <!--firstSet:'',-->
                <!--secondSet:'',-->
                <!--thirdSet:'',-->
                <!--fourthSet:'',-->
                <!--fifthSet:''-->
            <!--}-->
        <!--},-->
        <!--methods:{-->
            <!--twoSets(){-->
                <!--this.counter = "2 Sets",-->
                <!--this.show1st2nd = 'A',-->
                <!--this.show3rd = '',-->
                <!--this.show4th = '',-->
                <!--this.show5th = ''-->
            <!--},-->
            <!--threeSets(){-->
                <!--this.counter = "3 Sets",-->
                <!--this.show1st2nd = 'A',-->
                <!--this.show3rd = 'B',-->
                <!--this.show4th = '',-->
                <!--this.show5th = ''-->
            <!--},-->
            <!--fourSets(){-->
                <!--this.counter = "4 Sets",-->
                <!--this.show1st2nd = 'A',-->
                <!--this.show3rd = 'B',-->
                <!--this.show4th = 'C',-->
                <!--this.show5th = ''-->
            <!--},-->
            <!--fiveSets(){-->
                <!--this.counter = "5 Sets",-->
                <!--this.show1st2nd = 'A',-->
                <!--this.show3rd = 'B',-->
                <!--this.show4th = 'C',-->
                <!--this.show5th = 'D'-->

            <!--},-->

            <!--submitWorkout(){-->
                <!--liftRepo.sendWorkout();-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
    <!--.setCounter{-->
        <!--display:flex;-->
    <!--}-->

<!--</style>-->