<template>
    <b-table striped hover :items="items"></b-table>
</template>

<script>


    export default {
        data () {
            return {
                name: "squat-table",
                setCount: 5,

                items :[
                    { set: 1, reps: 5, weight: 40},
                    { set: 2, reps: 5, weight: 21},
                    { set: 3, reps: 5, weight: 89},
                    { set: 4, reps: 5, weight: 38}
                    ,


                ]
            }
        }

    }


</script>