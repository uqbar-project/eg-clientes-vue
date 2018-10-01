export default class Customer {
    constructor(id, name) {
        this.id = 0;
        this.name = '';
        this.id = id;
        this.name = name;
    }
    validate() {
        if (!this.name) {
            throw new Error('Debe ingresar nombre');
        }
    }
}
//# sourceMappingURL=customer.js.map