import React from 'react';
import { Table } from 'react-bootstrap';
import { AsignaturaTabla } from '../data/ObjetosTabla';

class BootstrapTable extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <Table striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>id</th>
            <th>Asignatura</th>
            <th>Nota</th>
          </tr>
        </thead>

        <tbody>

          {AsignaturaTabla.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.nota}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default BootstrapTable;
