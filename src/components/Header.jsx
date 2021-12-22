import React from 'react';



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.elementos = props.elementos;
  }

  crearElementos() {

    return 'hola';
  }


  render() {

    return (
      <header>
        <h1>Header</h1>
        
        {this.crearElementos()}
      
      </header>
    );
  }

}
export default Header;