import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

class AnimalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
    };
    this.change = this.change.bind(this);
  }

  async change(item) {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand'
    );
    const responseData = await response.json();
    this.setState({ selectedItem: responseData });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand'
    );
    const responseData = await response.json();
    this.setState({ selectedItem: responseData });
  }

  render() {
    return (
      <Container>
        <h1>Animal Aleatorio</h1>
        <Row>
          <Col lg={4} md={6}>
            <Card style={{ width: '17rem' }}>
              <Card.Img
                variant="top"
                src={this.state.selectedItem.image_link}
              />
              <Card.Body>
                <Card.Title>{this.state.selectedItem.name} </Card.Title>
                <Card.Text>
                  {this.state.selectedItem.latin_name}
                  <p>
                    Tipo de animal: {this.state.selectedItem.animal_type} 
                    Habitat: {this.state.selectedItem.habitat}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4} md={6}>
            <Button variant="primary" type="button" onClick={this.change}>
              Nuevo animal
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AnimalTable;
