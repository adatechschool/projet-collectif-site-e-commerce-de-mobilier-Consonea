class User {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    static async getAllUsers() {
//         let sql = "SELECT * FROM users";
//         return await db.
    }
}

module.exports = User;