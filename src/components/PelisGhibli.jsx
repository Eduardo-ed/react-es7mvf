import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  change(item) {
    this.setState({ selectedItem: item });
  }

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <Container>
        <h1>Peliculas del Studio Ghibli</h1>
        <Row>
          <Col lg={8} md={6}>
            <Table striped bordered hover size="sm" variant="light">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Director</th>
                  <th>Año</th>
                  <th>Puntuacion</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((item) => {
                  return (
                    <tr onClick={() => this.change(item)}>
                      <td>{item.title}</td>
                      <td>{item.director}</td>
                      <td>{item.release_date}</td>
                      <td>{item.rt_score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>

          <Col lg={4} md={6}>
            <Card style={{ width: '17rem' }}>
              <Card.Img variant="top" src={this.state.selectedItem.image} />
              <Card.Body>
                <Card.Title>
                  {this.state.selectedItem.original_title}
                </Card.Title>
                <Card.Text>
                  <p>{this.state.selectedItem.original_title_romanised}</p>
                  <p>{this.state.selectedItem.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PelisGhibli;
