export class Iteam{
    name;
    unit_price;
    quantity;

    constructor(name, unit_price, quantity){
        this.quantity = 1;
        this.name = name;
        this.unit_price = unit_price;
        this.quantity = quantity;
    }

    getName(){
        return this.name;
    }

    getUnitPrice(){
        return this.unit_price;
    }

    getQuantity(){
        return this.quantity;
    }


    setName(value) {
        this._name = value;
    }

    setUnit_price(value) {
        this.unit_price = value;
    }

    setQuantity(value) {
        this.quantity = value;
    }
}