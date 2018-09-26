//import Customer from "@/domain/customer"
import axios from 'axios';
export class HttpStatus {
}
HttpStatus.OK = 200;
export default class CustomerService {
    findAll(callback) {
        axios.get('http://localhost:4000/clientes/')
            .then((response) => {
            if (response.status = HttpStatus.OK) {
                callback(response.data);
            }
            else {
                //callbackError(response.statusText)
            }
        })
            .catch((error) => {
            throw 'Could not get customers list: ' + error.message;
        });
    }
}
//# sourceMappingURL=customer.js.map