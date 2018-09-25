//import Customer from "@/domain/customer"
import axios from 'axios'

export class HttpStatus {
	static OK : number = 200
}

export default class CustomerService {
	
	/*
	
	Working local
	
	customers : Customer[] = []

	constructor() {
		this.addCustomer("Jenny")
		this.addCustomer("Pappo")
	}
	
	addCustomer(name : string) {
		this.customers.push(new Customer(name))
	}
	
	findAll() : Customer[] {
		return this.customers
	}
	*/
	
	findAll(callback : any) {
		axios.get('http://localhost:4000/clientes/')
			.then((response: any) => {
				console.log(response.status)
				if (response.status = HttpStatus.OK) {
					console.log(response.data)
					callback(response.data)
				} else {
					//callbackError(response.statusText)
				}
			})
			.catch( (error) => { throw "Could not get customers list: " + error.message })
	}
}