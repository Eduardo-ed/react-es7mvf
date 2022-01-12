import { Home } from '../pag/Home';
import { ListaTareas } from '../pag/ListaTareas';
import { Perfil } from '../pag/Perfil';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: ListaTareas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
];