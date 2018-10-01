import axios from 'axios';
export class HttpStatus {
}
HttpStatus.OK = 200;
export default class CustomerService {
    async findAll() {
        const response = await axios.get('http://localhost:4000/customers');
        if (response.status === HttpStatus.OK) {
            return response.data;
        }
        else {
            throw response.data;
        }
    }
}
//# sourceMappingURL=customer.js.map