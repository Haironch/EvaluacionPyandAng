import { Routes } from '@angular/router';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { HomeComponent } from './components/home/home.component'; // Importa el HomeComponent

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para el Home
  { path: 'crear', component: CrearAlumnoComponent }, // Ruta para crear alumnos
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a Home por defecto
];
