import React from 'react';
import { Table, Card, Container, Button, Row, Col } from 'react-bootstrap';

class AnimalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      selectedItem: '',
    };
    this.change = this.change.bind(this);
    this.reload = this.reload.bind(this);
  }

  async reload(item) {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand/5'
    );
    const responseData = await response.json();
    this.setState({tableData: responseData, selectedItem: responseData[0] });
  }

  change(item) {
    this.setState({ selectedItem: item });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand/5'
    );
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <Container>
        <h1>Animal Aleatorio</h1>
        <Row>
        <Col lg={8} md={6}>
            <Table striped bordered hover size="sm" variant="light">
              <thead>
                <tr>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((item) => {
                  return (
                    <tr onClick={() => this.change(item)}>
                      <td>{item.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={this.state.selectedItem.image_link}
              />
              <Card.Body>
                <Card.Title>
                  {this.state.selectedItem.name}{' '}
                  {'(' + this.state.selectedItem.latin_name + ')'}{' '}
                </Card.Title>
                <Card.Text>
                  <p>
                    Tipo de animal: {this.state.selectedItem.animal_type}
                    <br />
                    Habitat: {this.state.selectedItem.habitat}.{' '}
                    {this.state.selectedItem.geo_range}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button variant="primary" type="button" onClick={this.reload}>
              Nuevo animal
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AnimalTable;
