<template>

    <div>
        <nav  class="navbar navbar-inverse navbar-fixed-top head">
            <ul class="nav navbar-nav">
                <li class="active spacing"> <router-link to="/">Home</router-link> </li>
                <li class="spacing"> <router-link to="/barbellCalc">Barbell Calc</router-link> </li>
                <li class="spacing"> <router-link to="/liftRepo">Lift Repo</router-link> </li>
                <li class="spacing"><a class="navbar-brand" href="#">Chris Ivey</a></li>
            </ul>
        </nav>
    </div>
</template>


<script>
    import 'bootstrap/dist/css/bootstrap.min.css'

    export default{

        data:function(){
            return {
            }
        },
   }

</script>


<style>
    .spacing{
        width:25%
    }
    .head{
        width:100%
    }
    .navbar-nav{
        flex-direction: unset !important;
    }

    .navbar{
        display:unset
    }
</style>