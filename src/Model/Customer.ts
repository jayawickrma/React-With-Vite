export class Customer {
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor(name: string, email: string, phone: string) {
        this._name = name;
        this._email = email;
        this._phone = phone;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}