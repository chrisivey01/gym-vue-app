<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Navbar/>
    <!--<Inputs/>-->
    <!--<Home/>-->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inputs from './components/Inputs'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'app',
  components: {
      Navbar,
      Inputs,
      Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
