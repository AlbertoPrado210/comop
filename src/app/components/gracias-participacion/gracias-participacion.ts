import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importamos el Router

@Component({
  selector: 'app-gracias-participacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gracias-participacion.html',
  styleUrl: './gracias-participacion.css'
})
export class GraciasParticipacionComponent {

  constructor(private router: Router) {} // Inyectamos el Router en el constructor

  volver() {
    this.router.navigate(['/']);

    // OPCIONAL: Podrías redirigirlos a la web oficial de la institución
    // window.location.href = 'https://www.gob.pe/fap';
  }
}
