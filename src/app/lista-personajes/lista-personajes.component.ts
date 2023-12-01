import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent implements OnInit {
  personajes: WritableSignal<any[]> = signal([]);
  personajesSvr = inject(PersonajesService);

  ngOnInit(): void {
    this.personajesSvr.getPersonajes().subscribe((res) => {
      this.personajes.set(res.results);
    });
  }
}
