export default class Customer {
    constructor(name) {
        this.id = 0;
        this.name = "";
        this.name = name;
    }
    validate() {
        if (!this.name)
            throw "Debe ingresar nombre";
    }
}
//# sourceMappingURL=customer.js.map