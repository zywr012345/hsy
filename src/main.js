import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import Mint from 'mint-ui'
import moment from 'moment'

import router from './router'
import store from './store'
import utils from './util/util'

import 'mint-ui/lib/style.css'
import './assets/style/iconfont/iconfont.css'
import './assets/style/common.scss'

Vue.use(Mint)


Vue.prototype.utils = utils;

moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.config.productionTip = false

new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app')
// new Vue({
//     el: '#app',
//     store,
//     router,
//     components: { App },
//     template: '<App/>'
// })
