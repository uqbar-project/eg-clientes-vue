//import Customer from "@/domain/customer"
import axios from 'axios'

export class HttpStatus {
    static OK: number = 200
}

export default class CustomerService {

    findAll(callback: any) {
        axios.get('http://localhost:4000/clientes/')
            .then((response: any) => {
                if (response.status = HttpStatus.OK) {
                    callback(response.data)
                } else {
                    //callbackError(response.statusText)
                }
            })
            .catch((error) => {
                throw 'Could not get customers list: ' + error.message
            })
    }
}