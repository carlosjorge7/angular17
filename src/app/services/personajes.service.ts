import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private http = inject(HttpClient);

  getPersonajes() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }
}
