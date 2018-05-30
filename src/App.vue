<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
 </div>
</template>

<script>

import Vue from 'vue'
import Navbar from './components/Navbar'
import Inputs from './components/Inputs'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import PlusCircleOutlineIcon from "vue-material-design-icons/plus-circle-outline.vue"
import Datepicker from 'vuejs-datepicker-better';



Vue.use(BootstrapVue)

export default {

  name: 'app',
  components: {
      Navbar,
      Inputs,
      Home,
      PlusCircleOutlineIcon,
      Datepicker
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
}
</style>
