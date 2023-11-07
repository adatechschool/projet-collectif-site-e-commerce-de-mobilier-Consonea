const express = require("express");
const app = express(); // j'initialise express
const port = 3000;
const userRouter = require("./controllers/User");
const articleRouter = require("./controllers/Article");

// Définition des routes avec les routeurs
app.use("/users", userRouter);
app.use("/articles", articleRouter);

// ---------- LISTEN ----------
app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
// pour écouter le serveur, on utilise la méthode listen qui prend en paramètre le 'PORT', le 'domaine qui
// est localhost, pas nécessaire de le nommer puisqu'il il est mis par défaut, puis un callback () - fonction fléchée qui sera
// exécuté quand le serveur sera prêt à recevoir une requête

module.exports = app;

// const dataService = require("./sqlConnection");

// // TEST: GET users name
// app.get('/users', (req, res) => {
//   res.send('Test récupération utilisateurs')
// })

// // --------- Pour tester si le serveur Express fonctionne ------------
// app.use((req, res) => {
//   res.json({ message: "nous avons reçu votre requête" });
// });

// // --------------- Create -----------
// app.post("/insert", (request, response) => {
//   // Récupère le nom depuis le corps de la requête
//   const { name } = request.body;
//   // Obtient une instance de la base de données
//   const db = dataService.getDatabaseObjetInstance();

//   // Insère le nouveau nom dans la base de données
//   const result = db.insertNewName(name);

//   // Gère la réponse une fois l'opération terminée
//   result
//     .then((data) => response.json({ data: data }))
//     .catch((err) => console.log(err));
// });

// // --------------- READ ------------
// // Permet d'écouter les requêtes envoyées par le client.
// // ('/') = chemin relatif à la racine du site, (call back avec deux paramètre : requête et réponse)
// // function fléchée qui sera exécuté lorsque le client va envoyer une requête à cette route
// app.get("/", (req, res) => {
//   res.send("<h1>Salut le monde<h1>");
//   // res.status(200).sendFile('index.html', {root: __dirname}); // pour envoyé un ficher entier (senfile) suite à la réquête du client
// });
