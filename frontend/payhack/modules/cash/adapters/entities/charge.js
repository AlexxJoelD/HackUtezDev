export class paymentMethod{
    type;
    expires_at;
    constructor(type, expires_at){
        this.type = type;
        this.expires_at = expires_at;
    }


    getType() {
        return this.type;
    }

    setType(value) {
        this.type = value;
    }

    getExpiresAt() {
        return this.expires_at;
    }

    setExpiresAt(value) {
        this.expires_at = value;
    }
}