import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Método para navegar a la página de crear alumnos
  irACrearAlumno() {
    this.router.navigate(['/crear']);
  }

  // Método para navegar a la página de ver alumnos (puedes crear un componente para esto)
  irAVerAlumnos() {
    this.router.navigate(['/ver-alumnos']);
  }
}
