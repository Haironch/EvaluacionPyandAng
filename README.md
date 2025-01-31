# Sistema de Gestión Escolar

Un sistema web desarrollado con **Angular** (Frontend) y **Django** (Backend) para la gestión de alumnos PARA UNA PRUEBA DE TRABAJO

---

## Tecnologías Utilizadas

### Frontend

- **Angular** (versión más reciente)
- **Tailwind CSS** para estilos
- **Angular Router** para navegación

### Backend

- **Django** como framework principal
- **Django REST Framework** para la creación de APIs
- **MongoDB** (usando **Djongo**) como base de datos

#### REQUERIMIENTOS PEDIDOS Y CON LOS QUE CUMPLE MI SITEMA

## API Endpoints

- **`POST /crear-alumno/`**: Registra un nuevo alumno.
- **`GET /consultar-alumno/<grado>/`**: Obtiene alumnos por grado.
- **`GET /todos-alumnos/`**: Obtiene todos los alumnos registrados.

---

## Modelo de Datos

### Alumno

- **nombre** (string): Nombre completo del alumno.
- **fecha_nacimiento** (date): Fecha de nacimiento del alumno.
- **nombre_padre** (string): Nombre del padre del alumno.
- **nombre_madre** (string): Nombre de la madre del alumno.
- **grado** (number, 1-6): Grado escolar del alumno.
- **seccion** (string, A-C): Sección a la que pertenece el alumno.
- **fecha_ingreso** (date, automático): Fecha en que el alumno fue registrado en el sistema.

## Instalación y Configuración

### Frontend

1. Clona el repositorio.
2. Instala las dependencias:
   npm install
3. Inicia el servidor de desarrollo:
   ng serve

#### Backend

## Configuración del Entorno

### 1. Crear un Entorno Virtual

python -m venv venv

### 2. Activar el Entorno Virtual

#### Linux/Mac:

source venv/bin/activate

#### Windows:

venv\Scripts\activate

### 3. Instalar Dependencias

pip install -r requirements.txt

### 4. Ejecutar Migraciones

python manage.py migrate

### 5. Iniciar el Servidor

python manage.py runserver

### Configuración de la Base de Datos

El proyecto utiliza MongoDB a través de Djongo.

DATABASES = {
'default': {
'ENGINE': 'djongo',
'NAME': 'escuela_db',
'ENFORCE_SCHEMA': False,
}
}

Autenticación
El sistema utiliza autenticación básica de Django REST Framework. Para crear un superusuario, ejecuta:

python manage.py createsuperuser
