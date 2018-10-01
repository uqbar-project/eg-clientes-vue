import axios from 'axios'
import errorHandler from '@/components/errorHandler'

export class HttpStatus {
    public static OK: number = 200
}


export default class CustomerService {

    async findAll() {
        const response = await axios.get('http://localhost:4000/customers')
        if (response.status === HttpStatus.OK) {
            return response.data
        } else {
            throw response.data
        }
    }

}
