


export class Costumer{
    name;
    email;
    phone;

    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }


    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getEmail() {
        return this.email;
    }

    setEmail(value) {
        this.email = value;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(value) {
        this.phone = value;
    }
}