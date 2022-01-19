import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { AsignaturaTabla } from '../data/ObjetosTabla';

class BootstrapTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1
    };
  }

  change(id){
    this.setState({ i: id-1});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={8} md={6}>
            <Table striped bordered hover size="sm" variant="light">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Asignatura</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                {AsignaturaTabla.map((item) => {
                  return (
                    <tr onClick={() => this.change(item.id)} >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.nota}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col lg={4} md={6}>
            <Card style={{ width: '17rem' }}>
              <Card.Img variant="top" src={AsignaturaTabla[this.state.i].img}/>
              <Card.Body>
                <Card.Title>{AsignaturaTabla[this.state.i].id}-{AsignaturaTabla[this.state.i].name}</Card.Title>
                <Card.Text>Nota: {AsignaturaTabla[this.state.i].nota}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BootstrapTable;
