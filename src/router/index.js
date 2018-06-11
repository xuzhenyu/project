import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '../components/HelloWorld'
import carSpeak from '../components/sellcar.vue'
import HomeNav from '../components/homenav.vue'
import sourceList from '../components/sourcelist.vue'
import Elm from '../components/elm.vue'
import carlistpage from '@/components/carlistpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeNav
    },
    {
        path: '/sellcar',
        name: 'carspeak',
        component: carSpeak
    },
    {
      path:'/listcar',
      name:'sourcelist',
      component:sourceList
    },
    {
      path:'/elm',
      name:'Elm',
      component:Elm
    },
    {
      path:'/listpage',
      name:'carlistpage',
      component:carlistpage
    }
  ]
})
