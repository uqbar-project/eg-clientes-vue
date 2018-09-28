import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import errorHandler from '@/components/errorHandler'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.config.errorHandler = ((err: Error, vm: Vue, info: string) => {
  errorHandler(err)
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')


