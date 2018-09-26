import Customer from '../../src/domain/customer'

export class MockCustomerService {
    customers = [
        new Customer('Brukman Hnos'),
        new Customer('Nestle'),
    ]

    findAll() {
        return { data: this.customers, status: 200 }
    }
}