import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'
import classify from './views/classify.vue'
import cart from './views/cart.vue'
import mine from './views/mine.vue'
import wc from './views/tabber.vue'
<<<<<<< HEAD
import packlist from './views/packlist.vue'
import grouplist from './views/grouplist.vue'
import group from './views/group.vue'
=======
>>>>>>> 6294837e3ce35a383b6d72fa8a4ff2364907e05a
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{
<<<<<<< HEAD
      name:'home'
      }
    },
    {
      path: '/packlist',
      name: 'packlist',
      component: packlist
    },
    {
      path: '/grouplist',
      name: 'grouplist',
      component: grouplist
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
=======
        name:'home'
      }
    },
    {
>>>>>>> 6294837e3ce35a383b6d72fa8a4ff2364907e05a
      path:'/',
      name:'wc',
      component:wc,
      children:[
        {
          path: '/wc/home',
          name: 'home',
          component: home
        },
        {
          path: '/wc/classify',
          name: 'classify',
          component: classify
        },
        {
          path: '/wc/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/wc/mine',
          name: 'mine',
          component: mine
        },
      ]
    },
  ]
})
