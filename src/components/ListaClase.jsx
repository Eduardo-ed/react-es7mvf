import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.ListaInicial = [];
    this.titulo=props.titulo;
    this.icono=props.icono;
    this.elementos=props.elementos;

  }

  crearLista(){
    if (this.elementos !== undefined) {
      for (let i = 0; i < this.elementos.length; i++) {
        this.ListaInicial.push(
          <ComponenteListaClase
            done={this.elementos[i].done}
            texto={this.elementos[i].texto}
            prioridad={this.elementos[i].prioridad}
          />
        );
      }
    }
  }

  addElement() {
    
    /*
    const valorTextInput = useRef();
    const valorPrioridad = useRef();

    const newLista = listaComponentes.concat(
      <ComponenteListaClase prioridad={valorPrioridad.current.value} texto={valorTextInput.current.value} />
    );*/
  }

  render() {
    this.crearLista();
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {this.ListaInicial}
          <li>
            <input  type="text" placeholder="Introduce una tarea" />
            <select >
              <option value="alta">alta</option>
              <option value="media">media</option>
              <option value="baja">baja</option>
            </select>
            <br />
            <button onClick={this.addElement()}>Añadir</button>

          </li>
        </ul>
      </div>
    );
  }
}
export default ListaClase;