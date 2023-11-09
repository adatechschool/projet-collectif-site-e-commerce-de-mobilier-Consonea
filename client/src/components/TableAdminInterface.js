import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';


function TableAdmin() {
  const [articles, setArticles] = useState([]);

    
    console.log('got through the function')

    useEffect(() => {
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
            // return <pre>{JSON.stringify(articles['type'])}</pre>
        
          return (<tr>
          <td>{article.user_id}</td>
          <td>{article.name}</td>
          <td>{article.type}</td>
          <td>{article.prix}</td>
          <td>{article.status}</td>
          <td>Mettre en vente</td>
          </tr>)
          })}
        </tbody>
      </Table>
    );
  }
  
  export default TableAdmin;