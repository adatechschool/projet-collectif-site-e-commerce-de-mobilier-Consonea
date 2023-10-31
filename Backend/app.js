const express = require('express'); // importe le module 
const app = express(); // j'initialise express


// const port = 3000; pour la création du Port, à utiliser avec la seconde possibilité plus bas



// Permet d'écouter les requêtes envoyées par le client. 
// ('/') = la route racine, (call back avec deux paramètre : requête et réponse) 
// function fléchée qui sera exécuté lorsque le client va envoyer une requête à cette route 
app.get('/index', (req, res) => {
    res.send("<h1>Salut le monde<h1>");
    // res.status(200).sendFile('index.html', {root: __dirname}); // pour envoyé un ficher entier (senfile) suite à la réquête du client 
});



// const database = require('../Backend/sqlConnection');


// Seconde possibilité à utiliser avec la function port (créé plus haut)
// app.listen(port, () => {
//     console.log(`Application exemple à l'écoute sur le port ${port}!`);
//   });



app.listen(3000, () => {
    console.log(`Server is up and running on 3000 ...`);
});
// pour écouter le serveur, on utilise la méthode listen qui prend en paramètre le 'PORT', le 'domaine qui
// est localhost, pas nécessaire de le nommer puisqu'il il est mis par défaut, puis un callback () - fonction fléchée qui sera 
// exécuté quand le serveur sera prêt à recevoir une requête


app.use((req, res) => {
    res.json({ message: 'nous avons reçu votre requête' });
});
