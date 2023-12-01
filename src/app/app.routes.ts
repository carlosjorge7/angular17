import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'personajes',
    loadComponent: () =>
      import('./lista-personajes/lista-personajes.component').then(
        (m) => m.ListaPersonajesComponent
      ),
  },
  {
    path: 'mapa',
    loadComponent: () =>
      import('./mapa/mapa.component').then((m) => m.MapaComponent),
  },
];
