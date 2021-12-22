import React from 'react';

import { Lista } from './components/Lista';
import ListaClase from './components/ListaClase';
import Header from './components/Header';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  const e={texto: `prueba`};
  const e2={texto: `a`};
  const e3={texto: `h`};

  return (
    
    <div>
      <Header elementos = {[e, e2, e3]}/>


      <h1>Lista de tareas:</h1>

      <ListaClase titulo="Tareas de la casa:" icono=":)" elementos={elementos1} />
      <ListaClase titulo="Lista de la compra:" icono=":*" elementos={elementos2} />
      <ListaClase titulo="ToDo del curso" icono=";)" elementos={elementos3} />
      
    </div>
  );
}