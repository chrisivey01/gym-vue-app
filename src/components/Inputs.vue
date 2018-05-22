<template>
    <div>
        <div>
            <label class="notValid">{{notValid}}</label>
        </div>
        <label>Weight: </label>
        <input v-model="input" placeholder="Input weight"/>
        <div v-if="weights !== null" >
            <div v-if="weights.errors !== ''">
                <label class="error"> {{weights.errors}} </label>
            </div>
            <div v-else class="weights">
                <label> 45lbs: </label>
                <label> {{weights.fortyFives}} </label>
                <label> 25lbs: </label>
                <label> {{weights.twentyFives}} </label>
                <label> 10lbs: </label>
                <label> {{weights.tens}} </label>
                <label> 5lbs: </label>
                <label> {{weights.fives}} </label>
                <label> 2.5lbs: </label>
                <label> {{weights.twoPointFives}}</label>
                <label v-if="weights.extraWeight !== 0"> Extra weight: {{weights.extraWeight}}lbs</label>
            </div>
        </div>
        <button @click="alert()">Calculate</button>
    </div>

</template>

<script>
    import weightCalc from '../weightCalc';

    export default {

        data() {
            return {
                input: '',
                weight: '',
                notValid: '',
                weights: '',
                fortyFives:0,
                twentyFives:0,
                tens:0,
                fives:0,
                twoPointFives:0,
                extraWeight:0


            }
        },
        methods: {
            alert() {
                this.weights = weightCalc.calc(this.input)
                    .then((weights) => {
                        this.weights = weights
                    })


            }
        }
    }
</script>

<style>
    .error{
        color:red;
        font-weight: bolder;
    }

    .weights{
        display:block;
    }
</style>