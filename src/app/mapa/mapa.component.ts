import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent {}
