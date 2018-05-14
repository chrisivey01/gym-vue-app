<template>
    <div>
        <div>
            <label class="notValid">{{notValid}}</label>
        </div>
        <label>Name: </label>
        <input v-model="input" placeholder="Input weight"/>
        <div class="weights">
            <label/> 45lbs:
            <label/> {{fortyFives}}
            <label/> 25lbs:
            <label/> {{twentyFives}}
            <label/> 10lbs:
            <label/> {{tens}}
            <label/> 5lbs:
            <label/> {{fives}}
            <label/> 2.5lbs:
            <label/> {{twoPointFives}}
        </div>
        <button @click="alert()">Calculate</button>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                input: '',
                weight: '',
                math: '',
                what: '',
                notValid: '',
                fortyFives: 0,
                twentyFives: 0,
                tens:0,
                fives:0,
                twoPointFives:0

            }
        },
        methods: {
            alert() {
                this.fortyFives = 0;
                this.twentyFives = 0;
                this.tens = 0;
                this.fives = 0;
                this.twoPointFives = 0;
                this.weight = 0;
                this.notValid = "";


                this.weight = this.input;

                if(this.weight > 45) {
                    this.weight = this.weight - 45;
                    while (this.weight > 0) {
                        if (this.weight >= 90) {
                            this.weight = this.weight - 90
                            this.fortyFives += 2
                        } else if (this.weight >= 50) {
                            this.weight = this.weight - 50
                            this.twentyFives += 2
                        }else if (this.weight >= 20) {
                            this.weight = this.weight - 20
                            this.tens += 2
                        }else if (this.weight >= 10) {
                            this.weight = this.weight - 10
                            this.fives += 2
                        }else if (this.weight >= 5) {
                            this.weight = this.weight - 5
                            this.twoPointFives += 2
                        }else if(this.weight < 5){
                            return this.notValid = "There is some left over"
                        }
                    }
                }else{
                    this.notValid = "This is not valid"
                }
                this.input = 0;
            }
        }
    }
</script>

<style>
    .notValid{
        color:red;
    }

    .weights{
        display:block;
    }
</style>