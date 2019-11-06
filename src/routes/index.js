import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../views/Home'
import Admin from '../views/Admin'
import Login from '../views/Login'
import Calendar from '../views/Calendar'

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
        layout: 'base'
      }
    },
    { path: '/home', component: Home,
      meta: {
        layout: 'base'
      }
    },
    { path: '/admin', component: Admin },
    { path: '/calendar', component: Calendar },
    { path: '*', component: NotFound,
      meta: {
        layout: 'error'
      }
    }
  ]
});

export default vueRouter
