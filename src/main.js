import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inputs from './components/Inputs'
import Home from './components/Home'
import LiftRepo from './components/LiftRepo'
import auth from './auth'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes =  [
    {
        path: "/",
        name: "home",
        component: Home,
        // props:{name:'test'},
        // meta: {requiresAuth:true}
    },
    {
        path: '/barbellCalc',
        name: 'barbellCalc',
        component: Inputs,
        meta: {requiresAuth:true}
    },
    {
        path: '/liftRepo',
        name: 'liftRepo',
        component: LiftRepo,
        meta: {requiresAuth:true}

    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!auth.loggedIn()){
            next({
                path:'/',
                query: {redirect:'/barbellCalc'}
            })
        }else{
            next()
        }
    } else {
        next()
    }
})



new Vue({
  render: h => h(App),
    router
}).$mount('#app')
