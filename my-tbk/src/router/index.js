import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import My from '@/views/My'
import Test from '@/views/Test'
import Lists from '@/views/Lists'
import SearchList from '@/views/SearchList'
Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/', 
      name: 'Home',
      component: Home
    },
    {
      path: '/goods/:id', 
      name: 'Goods',
      component: Goods
    },
    {
      path: '/my', 
      name: 'My',
      component: My
    },
    {
      path: '/test', 
      name: 'Test',
      component: Test
    },
    {
      path: '/lists/:id', 
      name: 'Lists',
      component: Lists
    },
    {
      path: '/searchlist', 
      name: 'SearchList',
      component: SearchList
    }
  ]
})
