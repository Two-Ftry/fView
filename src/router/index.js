import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ScaleTime from '@/modules/d3-four/ScaleTime'
import ScaleOrdinal from '@/modules/d3-four/ScaleOrdinal'
import ScaleInterpolate from '@/modules/d3-four/ScaleInterpolate'
import ScaleColor from '@/modules/d3-four/ScaleColor'
import ScaleObject from '@/modules/d3-four/ScaleObject'
import ScaleCustom from '@/modules/d3-four/ScaleCustom'

import Axis1 from '@/modules/d3-5/Axis1'

import D3Animation from '@/modules/d3-6/D3Animation'

import D3Svg from '@/modules/d3-7/D3Svg.vue'

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
    },
      {
          path: '/ordinal',
          name: 'ScaleOrdinal',
          component: ScaleOrdinal
      },
      {
          path: '/interpolate',
          name: 'ScaleInterpolate',
          component: ScaleInterpolate
      },
      {
          path: '/color',
          name: 'ScaleColor',
          component: ScaleColor
      },
      {
          path: '/scaleobject',
          name: 'ScaleObject',
          component: ScaleObject
      },
      {
          path: '/scalecustom',
          name: 'ScaleCustom',
          component: ScaleCustom
      },
      {
          path: '/axis1',
          name: 'Axis1',
          component: Axis1
      },
      {
          path: '/animation',
          name: 'Animation',
          component: D3Animation
      },
      {
          path: '/svg',
          name: 'd3svg',
          component: D3Svg
      }
  ]
})
