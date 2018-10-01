import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import 'buefy/dist/buefy.css'
import errorHandler from '@/components/errorHandler'
import store from '@/store/store'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.config.errorHandler = ((err: Error, vm: Vue, info: string) => {
    errorHandler(err)
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')


