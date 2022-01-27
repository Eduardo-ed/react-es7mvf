import React from 'react';
import { Container, Button } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    if (this.state.user != 'null' && this.state.user != 'null') {
      return (
        <Container>
          <br />
          <h1>Página de perfil</h1>
          <br />

          <Button variant="primary" type="button" onClick={this.logout}>
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
