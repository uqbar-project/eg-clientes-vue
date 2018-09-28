import axios from 'axios'
import errorHandler from "@/components/errorHandler";

export class HttpStatus {
	public static OK: number = 200
}


export default class CustomerService {
	
	public findAll(callback: any) {
		axios.get('http://localhost:4000/customers')
			.then((response: any) => {
				if (response.status === HttpStatus.OK) {
					callback(response.data)
				} else {
					errorHandler(response.data)
				}
			})
			.catch((err) => {
                errorHandler(err)
            })
	}
}
