import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);


    this.listaInicial = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }

    this.textoRef = React.createRef();
    this.prioridadRef = React.createRef();

    this.state = {
      listaActual: this.listaInicial
    };
  }

  nuevaTarea() {
    this.listaInicial =
      this.listaInicial.concat(
        <ComponenteListaClase
          texto={this.textoRef.current.value}
          prioridad={this.prioridadRef.current.value}
        />
      );
    this.setState({ listaActual: this.listaInicial });
  }


  render() {

    const Selector = React.forwardRef(() => (
      <select ref={this.prioridadRef} className="Selector">
        <option value="alta">alta</option>
        <option value="media">media</option>
        <option value="baja">baja</option>
      </select>
    ));

    const Texto = React.forwardRef(() => (
      <input ref={this.textoRef} type="text" className="Texto" placeholder="Introduce una tarea" />
    ));

    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>{this.state.listaActual}
          <li>
            <Texto ref={this.textoRef}></Texto>
            <Selector ref={this.prioridadRef}></Selector>

            <br />

            <button onClick={() => this.nuevaTarea()}>Añadir</button>

          </li>

        </ul>
      </div>
    );
  }
}
export default ListaClase;