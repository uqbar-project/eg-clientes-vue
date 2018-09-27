export default class Customer {
  private id: number = 0
  private name: string = ''

  constructor(id: number, name: string) {
	  this.id = id
	  this.name = name
  }

  public validate() {
    if (!this.name) { throw new Error('Debe ingresar nombre') }
  }

}
