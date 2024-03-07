import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent implements OnInit {
  personajes: WritableSignal<any[]> = signal([]);
  personajesSvr = inject(PersonajesService);

  ngOnInit(): void {
    this.personajesSvr.getPersonajes().subscribe((res) => {
      console.log(res);
      this.personajes.set(res.results);
    });
  }
}
