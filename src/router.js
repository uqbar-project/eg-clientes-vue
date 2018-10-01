import Vue from 'vue';
import Router from 'vue-router';
import Customer from './views/CustomerPage.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/customers',
            name: 'customers',
            component: Customer,
        },
    ],
});
//# sourceMappingURL=router.js.map