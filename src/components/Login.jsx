import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', existe: false };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
  }

  login() {
    let i = 0;

    do {
      if (
        Usuarios[i].user == this.inputUser.current.value &&
        Usuarios[i].password == this.inputPassword.current.value
      ) {
        this.setState({
          user: this.inputUser.current.value,
          password: this.inputPassword.current.value,
          existe: true,
        });
      } else {
        i += 1;
      }
    } while (i < Usuarios.length && this.state.existe == false);

    if (this.state.existe == false) {
      alert('no existe');
    }
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
    if (this.state.existe == false) {
      return (
        <div className="main-site">
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Usuario"
                  ref={this.inputUser}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.inputPassword}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Login
              </Button>
            </Form>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
        </div>
      );
    }
  }
}

export default Login;
