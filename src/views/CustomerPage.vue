<template>
    <div class="container">
        <section class="section">
            <h1 class="title">Customers</h1>
            <div class="field">
                <label class="label">Name</label>
                <div class="tile">
                    <input class="input" type="text" v-model="customer.name" placeholder="Name of the customer">
                    <a class="button is-link" title="Insert a new customer with that name">
                        <span class="icon">
                          <i class="fas fa-plus"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
        <section class="section">
            <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                <thead>
                <th>Customers list</th>
                </thead>
                <tbody>
                <tr v-for="(_customer, index) in customers" :key="index">
                    <td :id="'cust' + _customer.id">
                        {{_customer.name}}
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator'
	import Customer from '../domain/customer'
    import store from '../store/store'; // @ is an alias to /src
    import { mapState } from 'vuex'

    @Component({
        computed: mapState([ 'customers' ])
    })
	export default class CustomerPage extends Vue {

		public customer = new Customer(0, '')

		public mounted() {
		    store.dispatch('populateCustomers')
		}
	}
</script>
