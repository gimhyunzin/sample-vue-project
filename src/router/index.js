import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../components/Home'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Calendar from '../components/Calendar'

Vue.use(VueRouter);

const NotFound = { template: '<div>Not Found</div>'};

const vueRouter = new VueRouter({
  mode: "history",
  routes: [
    { path: '/login',
      component: Login,
      meta: {
        layout: 'blank'
      }
    },
    { path: '/', component: Home,
      meta: {
        layout: 'default'
      }},
    { path: '/admin', component: Admin },
    { path: '/calendar', component: Calendar },
    { path: '*', component: NotFound,
      meta: {
        layout: 'error'
      }
    }
  ]
})

export default vueRouter
