//page où l'administrateur voit l'ensemble des articles disponibles en vente et où elle peut modifier le status de ceux ci.
//vous pouvez utiliser les composants Tables dans React bootstrap : https://react-bootstrap.netlify.app/docs/components/table/
import Table from "../components/TableAdminInterface";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("localhost:5500/articles", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

export default function AdminInterface() {
    return (
       <Table />
    );
}
