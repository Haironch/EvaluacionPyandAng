import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../interfaces/ alumno.interface';

@Component({
  selector: 'app-crear-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css'],
})
export class CrearAlumnoComponent {
  alumno: Alumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombre_padre: '',
    nombre_madre: '',
    grado: 1,
    seccion: 'A',
  };

  constructor(private alumnosService: AlumnosService) {}

  onSubmit() {
    this.alumnosService.crearAlumno(this.alumno).subscribe({
      next: (response) => {
        console.log('Alumno creado:', response);
        this.resetForm();
        // Aquí podríamos agregar una notificación de éxito
      },
      error: (error) => {
        console.error('Error:', error);
        // Aquí podríamos agregar una notificación de error
      },
    });
  }

  resetForm() {
    this.alumno = {
      nombre: '',
      fecha_nacimiento: '',
      nombre_padre: '',
      nombre_madre: '',
      grado: 1,
      seccion: 'A',
    };
  }
}
