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
        <router-view></router-view>
    </div>
</template>




<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    export default{

        data:function(){
            return {
            }
        }
    }

    // let isLoggedIn = false;
    // const API = 'http://localhost:8080/';

    // function loggedIn(){
    //     console.log('loggedIn()')
    //     console.log(this.isLoggedIn)
    //     return isLoggedIn
    // }

    // export default{
    //     data:function(){
    //         return{
    //             username:'',
    //             password:''
    //         }
    //     },
    //     methods:{
    //         login(){
    //             fetch(API + 'login',
    //                 {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({
    //                         username:this.username,
    //                         password:this.password
    //                     })
    //                 })
    //                 .then(response => response.json())
    //                 .then(isSuccess => {
    //                     console.log(isSuccess)
    //                     //isLoggedIn = isSuccess
    //                     this.isLoggedIn = isSuccess
    //                 })
    //         }
    //     }
    // }
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