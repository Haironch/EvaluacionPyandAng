import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Alumno } from '../interfaces/ alumno.interface'; // Asegúrate de importar la interfaz Alumno

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para crear un alumno
  crearAlumno(alumno: Alumno): Observable<any> {
    return this.http.post(`${this.baseUrl}/crear-alumno/`, alumno, {
      headers: this.authService.getAuthHeaders(),
    });
  }

  // Método para obtener alumnos por grado (ya existente)
  consultarAlumnos(grado: number): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(
      `${this.baseUrl}/consultar-alumno/${grado}/`,
      {
        headers: this.authService.getAuthHeaders(),
      }
    );
  }

  // Nuevo método para obtener todos los alumnos
  obtenerTodosAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.baseUrl}/todos-alumnos/`, {
      headers: this.authService.getAuthHeaders(),
    });
  }
}
