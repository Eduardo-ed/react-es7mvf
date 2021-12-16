import React from 'react';

import './componente-lista.css';
import ComponenteLista from './ComponenteLista';

class ComponenteListaClase extends React.Component {
  
  constructor(props){
    super(props);
    this.done = props.done;
    this.prioridad= props.prioridad;
    this.texto =props.texto;
    this.setElementClass()
  }
  
  setElementClass(){
    this.claseLista=props.prioridad;
    if (props.done) {
      this.claseLista +=  ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  setTaskStatus(){
    props.done= !props.done;
    setElementClass();
  }
 
  render(){
    return (
      <li className={this.claseLista}>
        <input type="checkbox" onChange={setTaskStatus}/>
        {props.texto}
      </li>
    );
  }
}
export default ComponenteListaClase;

ComponenteListaClase.defaultProps={
  prioridad: 'baja'
}