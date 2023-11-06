// cette page sert d'interface pour interagir avec la base de données

const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'consonea',
    port: process.env.PORT || 3000 //process.env.PORT : c'est pour lancer un port par défaut si 3000 n'est pas dispo
});


connection.connect((err) => {
    if (err) {
        return console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});


// 
class DatabaseObjet {
    static getDatabaseObjetInstance() {
        return instance ? instance : new DatabaseObjet();
    } //la syntaxe ? : appelé opérateur ternaire : expression à tester ? valeur si vrai : valeur si faux. 

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM articles;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}




module.exports = DatabaseObjet;
