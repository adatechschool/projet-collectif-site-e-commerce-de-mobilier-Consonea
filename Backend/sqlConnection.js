
const mysql = require("mysql");

let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database : 'consonea'
});

db_con.connect((err) => {
    if (err) {
       return console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});

module.exports = db_con;
