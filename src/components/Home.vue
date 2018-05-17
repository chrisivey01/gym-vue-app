<template>
    <div>
        Welcome - if need assistance, go away
        <div class="login">
            <div>
                <div>
                    <label>ID:</label>
                </div>
                <div>
                    <input v-model="username"/>
                </div>
            </div>
            <div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <input v-model="passWord"/>
                </div>
            </div>
            <div>
                <button @click="login()">
                    Sign In
                </button>
            </div>
            {{this.test}}
        </div>
    </div>
</template>

<script>
    const API = 'http://localhost:8080/';

    export default {

        name: "Home",
        // props:['test'],
        data: function () {
            return {
                username: '',
                passWord: '',
                test:false
            }
        },
        methods:{
            login(){
                fetch(API + 'login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:this.username,
                        password:this.passWord
                    })
                })
                .then(response => response.json())
                .then((isSuccess) => {
                    this.test = isSuccess;

                    return this.test;
                });
            }
        }
    }
</script>

<style scoped>

    .login{
        padding:40px
    }
</style>