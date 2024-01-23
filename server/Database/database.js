// FAKE DATABASE //
export class Database {
    constructor() {
        // FAKE DATA USER
        this.id = 1;
        this.name = 'John Doe';
        this.email = 'john.doe@example.com';
        this.password = 'P@ssw0rd123';
        this.dob = '1985-01-15';
        this.address = '123 Main Street, Anytown, USA';
        this.phone_number = '+1 (555) 123-4567';
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === this.email && password === this.password) {
                    resolve({
                        id: this.id,
                        name: this.name,
                        email: this.email,
                        dob: this.dob,
                        address: this.address,
                        phone: this.phone_number
                    });
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 500);
        });
    }

    getUserById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === this.id) {
                    resolve({
                        id: this.id,
                        name: this.name,
                        email: this.email,
                        dob: this.dob,
                        address: this.address,
                        phone: this.phone_number
                    });
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 500);
        });
    }
}