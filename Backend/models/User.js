const db = require("../sqlConnection");

class User {
  constructor(first_name, last_name, username, email, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static async getAllUsers() {
    let sql = `SELECT * FROM users;`;
    return await db.execute(sql);
  }
}

module.exports = User;
