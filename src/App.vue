<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Navbar />
    <!--<Inputs/>-->
    <!--<Home/>-->
  </div>
</template>

<script>

import Vue from 'vue'
import Navbar from './components/Navbar'
import Inputs from './components/Inputs'
import Home from './components/Home'
import StoreLifts from './components/StoreLifts'
import SquatTable from './components/SquatTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

export default {

  name: 'app',
  components: {
      Navbar,
      Inputs,
      Home,
      StoreLifts,
      SquatTable
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
