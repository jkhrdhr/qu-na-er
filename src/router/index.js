import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
// import City from '../components/City'
// import Details from '../components/details'
const City = () => import('../components/City')
const Details = () => import('../components/details')
Vue.use(VueRouter)

const routes = [
      {
            path: '/',
            component: Home,
            meta: { index: 1 }
      },
      {
            path: '/city',
            name: 'city',
            component: City,
            meta: { index: 2 }
      },
      {
            path: '/Details/:id',
            name: 'details',
            component: Details,
            props: true,
            meta: { index: 2 }
      }
]

const router = new VueRouter({
      routes
})

export default router
