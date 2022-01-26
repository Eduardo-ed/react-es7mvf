import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.logout = this.logout.bind(this);
  }

  logout(){
    localStorage.clear();
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }

  render() {
    return (
      <Container>
        
          <Button variant="primary" type="button" onClick={this.logout}>
            Cerrar Sesion
          </Button>
        
      </Container>
    );
  }
}

export default Perfil;
