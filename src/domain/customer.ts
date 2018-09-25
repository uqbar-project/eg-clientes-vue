export default class Customer {
	id : number = 0
	name : string = ""
	
	constructor(name : string) {
		this.name = name
	}
	
	validate() {
		if (!this.name) throw "Debe ingresar nombre"
	}
	
}