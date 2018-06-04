<template>
    <div>
        Welcome - if need assistance, go away
        <div v-if="loginFailed" class="alert alert-danger" role="alert">
            <strong>Login Failure</strong> Check your credentials and try again...
        </div>
        <div class="login">
            <div>
                <div>
                    <label>{{loginFailed}}</label>
                    <label>{{accountCreated}}</label>
                </div>
                <div>
                    <label>ID:</label>
                </div>
                <div>
                    <input v-model="username" />
                </div>
            </div>
            <div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <input type=password v-model="password"/>
                </div>
            </div>
            <div>
                <button @click="loginHome()">
                    Sign In
                </button>
            </div>
            <div>
                <button @click="create()">
                    Create Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import auth from '../auth'
    export default {

        name: "Home",
        data() {
            return {
                username: '',
                password: '',
                loginFailed:'',
                accountCreated:''
            }
        },
        methods:{
            loginHome(){
                this.accountCreated = "";

                auth.login(this.username, this.password).then(success=> {

                    if(success){
                        this.$router.push('/liftRepo')
                        console.log("worked!")
                    }else{
                        console.log("failed!")
                        this.loginFailed = "Login failed, try again."
                    }
                });
            },

            create(){
                auth.createAccount(this.username, this.password).then( success=>{
                    if(success){
                        this.accountCreated = "Yay! Account made"
                    }else{
                        this.accountCreated = "Try again"
                    }
                })
            }
        }
    };
</script>

<style scoped>
.login {
  padding: 40px;
}
</style>