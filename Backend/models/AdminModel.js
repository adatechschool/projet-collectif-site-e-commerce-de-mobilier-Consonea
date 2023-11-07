const db = require("../sqlConnection");

class Admin {
    constructor(id,first_name,last_name,email,password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    static async getAllAdmins() {
        let sql = `SELECT * FROM admin;`;
        return await db.execute(sql);
    }
}

module.exports = Admin;