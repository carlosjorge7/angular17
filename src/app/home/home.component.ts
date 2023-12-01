import { Component } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
