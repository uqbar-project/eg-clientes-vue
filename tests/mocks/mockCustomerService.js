import Customer from '../../src/domain/customer';
export class MockCustomerService {
    constructor() {
        this.customers = [
            new Customer('Brukman Hnos'),
            new Customer('Nestle'),
        ];
    }
    findAll() {
        return { data: this.customers, status: 200 };
    }
}
//# sourceMappingURL=mockCustomerService.js.map