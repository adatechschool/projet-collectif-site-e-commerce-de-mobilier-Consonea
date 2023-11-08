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

  static async getUserByID(userId) {
    const query = `SELECT * FROM users WHERE id =${userId}`;
    const [rows] = await db.query(query, [userId]);
    return rows[0];
  }

  async saveUser() {
    let sql = `
    INSERT INTO users(
      first_name,
      last_name,
      username,
      email,
      password
    )
    VALUES(
        '${this.first_name}',
        '${this.last_name}',
        '${this.username}',
        '${this.email}',
        '${this.password}'
    )
    `;
    return await db.execute(sql);
}

static async deleteUserByID(id) {
  const query = `DELETE FROM users WHERE id = ${id}`;
  await db.query(query,[id]);
} 

}

module.exports = User;
