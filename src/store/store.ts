import Vuex from 'vuex'
import CustomerService from '@/services/customer'
import Customer from '@/domain/customer'
import Vue from 'vue'
import errorHandler from '@/components/errorHandler'

const customerService = new CustomerService()

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        customers: []
    },
    actions: {
        async populateCustomers({ commit }) {
            try {
                const customers = await customerService.findAll()
                commit('setCustomers', customers)
            } catch (err) {
                errorHandler(err)
            }
        }
    },
    mutations: {
        setCustomers(state : any, customers: any) {
            state.customers = customers.map((_customer: any) => new Customer(_customer.id, _customer.name))
        }
    },
    getters: {

    }
})

export default store
