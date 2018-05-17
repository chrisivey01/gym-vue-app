import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inputs from './components/Inputs'
import Home from './components/Home'
import LiftRepo from './components/LiftRepo'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes =  [
    {
        path: "/",
        name: "home",
        component: Home,
        props:{name:'test'}
    },
    {
        path: '/barbellCalc',
        name: 'barbellCalc',
        component: Inputs
    },
    {
        path: '/liftRepo',
        name: 'liftRepo',
        component: LiftRepo
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
