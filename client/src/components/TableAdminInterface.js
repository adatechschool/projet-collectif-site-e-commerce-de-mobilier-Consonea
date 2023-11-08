import Table from 'react-bootstrap/Table';

function TableAdmin() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Statut</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TableAdmin;