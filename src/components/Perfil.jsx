import React from 'react';
import { Container, Button, Accordion } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: undefined };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
  }

  componentDidMount() {
    this.setState({
      id: localStorage.getItem('id'),
    });
  }

  render() {
    if (this.state.id != null && this.state.id != 'null') {
      return (
        <Container>
          <br />
          <h1>Página de perfil</h1>
          <br />

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{Usuarios[this.state.id].user}</Accordion.Header>
              <Accordion.Body>
                Nombre: {Usuarios[this.state.id].name}.
                <br/>
                Email: {Usuarios[this.state.id].mail}.
                <br/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />

          <Button  href="#home" variant="primary" type="button" onClick={this.logout}>
            Cerrar Sesion
          </Button>
        </Container>
      );
    } else {
      return (
        <Container>
          <br />
          <h1>Inicie Sesion</h1>
        </Container>
      );
    }
  }
}

export default Perfil;
