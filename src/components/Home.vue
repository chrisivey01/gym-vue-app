<template>
    <div>
        Welcome - if need assistance, go away
        <div v-if="loginFailure" class="alert alert-danger" role="alert">
            <strong>Login Failure</strong> Check your credentials and try again...
        </div>
        <div class="login">
            <div>
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
                    <input v-model="passWord" />
                </div>
            </div>
            <div>
                <button @click="login()">
                    Sign In
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
  name: "Home",
  // props:['test'],
  data: function() {
    return {
      username: "",
      passWord: "",
      loginFailure: false
    };
  },
  methods: {
    login() {
      this.loginFailure = false;
      auth.login(this.username, this.passWord).then(success => {
        // Deal with success
        if (success) {
            this.$router.push('/barbellCalc')
        } else {
          this.loginFailure = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  padding: 40px;
}
</style>