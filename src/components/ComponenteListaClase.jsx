import React from 'react';

import './componente-lista.css';
import ComponenteLista from './ComponenteLista';

class ComponenteListaClase extends React.Component {
  constructor(props){
    super(props);
    this.state={
      done: props.done
    };
    this.prioridad= props.prioridad;
    this.texto =props.texto;
    this.setElementClass()
  }
  
  setElementClass(){
    this.claseLista=this.prioridad;
    if (this.state.done) {
      this.claseLista +=  ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  changeStatus(){
    this.setState({done: !this.state.done});
  }
 
  render(){
    return (
      <li className={this.claseLista}>
        <input type="checkbox" onChange={this.changeStatus.bind(this)}/>
        {this.texto}
      </li>
    );
  }
}
ComponenteListaClase.defaultProps={
  prioridad: 'baja'
}
export default ComponenteListaClase;