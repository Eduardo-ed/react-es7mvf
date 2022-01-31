import { Home } from '../pag/Home';
import { ListaTareas } from '../pag/ListaTareas';
import { Perfil } from '../pag/Perfil';
import { Tabla } from '../pag/Tabla';
import { PelisGhibli } from '../pag/PelisGhibli';
import { Animal } from '../pag/Animal';

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
  {
    id: 4,
    path: '/tabla',
    title: 'Tabla Notas',
    component: Tabla,
  },
  {
    id: 5,
    path: '/pelisGhibli',
    title: 'Studio Ghibli',
    component: PelisGhibli,
  },
  {
    id: 6,
    path: '/animal',
    title: 'Animal',
    component: Animal,
  },
];
