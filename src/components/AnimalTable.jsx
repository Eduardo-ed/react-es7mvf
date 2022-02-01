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
