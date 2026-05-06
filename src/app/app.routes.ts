import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario';
import { ConcientizacionComponent } from './components/concientizacion/concientizacion';
import { GraciasParticipacionComponent } from './components/gracias-participacion/gracias-participacion';

export const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'seguridad', component: ConcientizacionComponent },
  { path: 'gracias', component: GraciasParticipacionComponent },
  { path: '**', redirectTo: '' }
];
