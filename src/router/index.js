import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ScaleTime from '@/modules/d3-four/ScaleTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/time',
      name: 'ScaleTime',
      component: ScaleTime
    }
  ]
})
