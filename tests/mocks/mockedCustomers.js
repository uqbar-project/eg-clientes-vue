import Customer from '../../src/domain/customer';
import { HttpStatus } from "@/services/customer";
export default function mockedCustomers() {
    return {
        status: HttpStatus.OK,
        data: [
            new Customer(26, 'Brukman Hnos'),
            new Customer(51, 'Nestle'),
        ],
    };
}
//# sourceMappingURL=mockedCustomers.js.map