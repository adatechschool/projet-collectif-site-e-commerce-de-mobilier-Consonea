import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

// VALIDATE AN ITEM TO SHOW IT 
function validateItem(object, setArticles) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(object.name + ' ' + object.description)

  var raw = JSON.stringify({
    "id": object.id,
    "name": `${object.name}`,
    "type": `${object.type}`,
    "colors": `${object.colors}`,
    "price": object.price,
    "height": object.height,
    "width": object.width,
    "depth": object.depth,
    "description": `${object.name}`,
    "status": 1,
    "quantity": object.quantity,
    "user_id": object.user_id
  });

  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`http://localhost:5500/articles/${object.id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      console.log('patch successful');

      // Fetch the updated articles after successful patch
      fetch("http://localhost:5500/articles")
        .then(response => response.json())
        .then(json => setArticles(json))
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
}

// DELETE AN ITEM
function deleteItem(object_id, setArticles) {
  console.log("L'objet a bien été supprimé")
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  fetch(`http://localhost:5500/articles/${object_id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      console.log('delete successful');

      // Fetch the updated articles after successful delete
      fetch("http://localhost:5500/articles")
        .then(response => response.json())
        .then(json => setArticles(json))
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
}

function TableAdmin() {
  const [articles, setArticles] = useState([]);

  console.log('got through the function')

  useEffect(() => {
    // on récupère l'ensemble des articles de la db
    fetch("http://localhost:5500/articles")
      .then(response => response.json())
      .then(json => setArticles(json))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <h1 style={{ marginBottom: 20, marginTop: -80 }}>Interface administrateur•ice</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => {
            if (article.status === 0)
              return (
                <tr key={article.id}>
                  <td>{article.user_id}</td>
                  <td>{article.name}</td>
                  <td>{article.type}</td>
                  <td>{article.price + ' €'}</td>
                  <td>A valider</td>
                  <td><button onClick={() => validateItem(article, setArticles)} className="btn btn-success">valider</button></td>
                </tr>
              )
            else return (
              <tr key={article.id}>
                <td>{article.user_id}</td>
                <td>{article.name}</td>
                <td>{article.type}</td>
                <td>{article.price + ' €'}</td>
                <td>En vente</td>
                <td><button onClick={() => deleteItem(article.id, setArticles)} className="btn btn-danger">supprimer</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableAdmin;
