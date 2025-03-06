# Laravel & Vue.js CRUD - Prueba Técnica

## 📌 Descripción
Este proyecto es una prueba técnica Full Stack para **BROERS** que implementa un sistema de gestión de usuarios con un CRUD completo utilizando **Laravel 12 (Backend)** y **Vue.js 3 (Frontend)**.

Los usuarios pueden ser creados, editados, activados/desactivados y eliminados desde el frontend. Además, el sistema cuenta con autenticación mediante **Laravel Sanctum**, lo que permite gestionar sesiones de usuario de manera segura.

---

## 🛠️ Tecnologías Utilizadas
- **Backend**: Laravel 12, PHP 8.2, Sanctum para autenticación
- **Frontend**: Vue.js 3, Vite, Pinia para manejo de estado, Axios para peticiones HTTP, Bootstrap para el diseño
- **Base de Datos**: MySQL / SQL Server Express

---

## 🚀 Instalación y Configuración
### 1️⃣ Clonar el repositorio
```bash
  git clone https://github.com/estebanm1892/broers-app
  cd broers-app
```

### 2️⃣ Configurar el Backend (Laravel)
#### 📌 Instalar dependencias
```bash
composer install
```

#### 📌 Copiar archivo de entorno y configurar base de datos
```bash
cp .env.example .env
```
En el archivo `.env`, configurar las credenciales de base de datos:
```env
DB_CONNECTION=mysql # O sqlsrv si usas SQL Server
DB_HOST=127.0.0.1
DB_PORT=3306 # O 1433 para SQL Server
DB_DATABASE=tu_base_de_datos
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

#### 📌 Generar clave de aplicación y ejecutar migraciones
```bash
php artisan key:generate
php artisan migrate --seed
```
Esto creará las tablas y poblará la base de datos con **usuarios de prueba**.

#### 📌 Iniciar el servidor
```bash
php artisan serve
```

### 3️⃣ Configurar el Frontend (Vue.js)
#### 📌 Instalar dependencias
```bash
cd frontend
npm install
```

#### 📌 Configurar API Base URL
En el archivo `.env` del frontend, asegurarse de que la API apunte correctamente al backend:
```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

#### 📌 Iniciar el servidor de desarrollo
```bash
npm run dev
```

---

## 📌 Datos de Usuarios de Prueba
Al ejecutar los **seeders**, estos usuarios estarán disponibles:

| Nombre        | Email              | Contraseña     | Estado    |
|--------------|------------------|---------------|-----------|
| Admin User  | admin@example.com | password123   | Activo    |
| Test User 1 | test1@example.com | password123   | Activo    |
| Test User 2 | test2@example.com | password123   | Inactivo  |

El usuario `test2@example.com` está **desactivado** y no podrá iniciar sesión.

---

## 🔑 Funcionalidades Implementadas
✅ CRUD de Usuarios (Crear, Leer, Actualizar, Eliminar)
✅ Autenticación con Laravel Sanctum
✅ Activar/Desactivar usuarios
✅ Mensajes de error si un usuario desactivado intenta iniciar sesión
✅ Interfaz de usuario con Bootstrap

---

## 📧 Contacto
Si tienes dudas o sugerencias sobre este proyecto, puedes escribirme a **estebanm1892@gmail.com** 🚀.

