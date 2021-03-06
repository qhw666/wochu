import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'
import classify from './views/classify.vue'
import cart from './views/cart.vue'
import mine from './views/mine.vue'
import wc from './views/tabber.vue'
import details from './components/details.vue'
import activityTemplate from './views/activityTemplate.vue'
import packlist from './views/packlist.vue'
import grouplist from './views/grouplist.vue'
import group from './views/group.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{
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
          component: cart,      
        },
        {
          path: '/wc/mine',
          name: 'mine',
          component: mine
        },
      ]
    },
    {
      path: '/details/:id',
      name:'details',
      component: details
    },
    {
      path:'/activityTemplate',
      name: 'activityTemplate',
      component: activityTemplate
    }
  ]
})
