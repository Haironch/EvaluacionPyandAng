import { Routes } from '@angular/router';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { VerAlumnosComponent } from './components/ver-alumnos/ver-alumnos.component'; // Nueva importación

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crear', component: CrearAlumnoComponent },
  { path: 'ver-alumnos', component: VerAlumnosComponent }, // Nueva ruta
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
