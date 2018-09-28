import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.config.errorHandler = ((err: Error, vm: Vue, info: string) => {
  console.log("se pudrio mal")
  console.log("Chau", err)
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')


