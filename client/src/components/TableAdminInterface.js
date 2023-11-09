import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function showItem(object_id) {
  var raw = "";

var requestOptions = {
  method: 'PATCH',
  body: raw,
  redirect: 'follow'
};

fetch("localhost:5500/articles/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
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
    },
    [])

    return (
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
          return (<tr>
          <td>{article.user_id}</td>
          <td>{article.name}</td>
          <td>{article.type}</td>
          <td>{article.price + ' €'}</td>
          <td>A valider</td>
          <td><button onClick={showItem} class="mt-4 btn btn-success">valider</button></td>
          </tr>)
          else return((<tr>
            <td>{article.user_id}</td>
            <td>{article.name}</td>
            <td>{article.type}</td>
            <td>{article.price + ' €'}</td>
            <td>En vente</td>
            <td><button class="mt-4 btn btn-success">supprimer</button></td>
            </tr>))
          })}
        </tbody>
      </Table>
    );
  }
  
  export default TableAdmin;