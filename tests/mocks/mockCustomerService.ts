import Customer from '../../src/domain/customer'

export default class MockCustomerService {
    customers = [
        new Customer('Brukman Hnos'),
        new Customer('Nestle'),
    ]

    findAll() {
        return { data: this.customers, status: 200 }
    }
}