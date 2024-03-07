import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personajes',
    loadComponent: () =>
      import('./lista-personajes/lista-personajes.component').then(
        (m) => m.ListaPersonajesComponent
      ),
  },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full',
  },
];
