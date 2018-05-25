
import Vue from 'vue'
import Elementui from 'element-ui'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
//import Swipe from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/mint-ui/lib/style.css'

import Mb1 from './assets/js/flexible.debug.js'
import Mb2 from './assets/js/flexible_css.debug.js'

  Vue.use(MintUI)
  Vue.component(MintUI)
  Vue.use(Elementui)


//Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Mb1,
  Mb2,
  router,
  template: '<App/>',
  components: { App }
})
