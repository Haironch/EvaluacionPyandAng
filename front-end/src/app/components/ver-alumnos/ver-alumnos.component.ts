import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../interfaces/ alumno.interface';

@Component({
  selector: 'app-ver-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ver-alumnos.component.html',
  styleUrls: ['./ver-alumnos.component.css'],
})
export class VerAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  gradoSeleccionado: number | null = null;
  grados = [1, 2, 3, 4, 5, 6];
  cargando = false;
  error = '';

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.cargarTodosAlumnos();
  }

  cargarTodosAlumnos() {
    this.cargando = true;
    this.error = '';
    this.alumnosService.obtenerTodosAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
        this.cargando = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los alumnos';
        this.cargando = false;
        console.error('Error:', error);
      },
    });
  }

  filtrarPorGrado(grado: number | null) {
    this.cargando = true;
    this.error = '';

    if (grado === null) {
      this.cargarTodosAlumnos();
      return;
    }

    this.alumnosService.consultarAlumnos(grado).subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
        this.cargando = false;
      },
      error: (error) => {
        this.error = 'Error al filtrar los alumnos';
        this.cargando = false;
        console.error('Error:', error);
      },
    });
  }
}
