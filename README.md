# Acortador de URLs

Un servicio de acortamiento de URLs desarrollado con **Spring Boot** para el backend y **React** para el frontend. Permite a los usuarios registrarse, autenticarse, crear URLs acortadas y visualizar estadísticas de clics en un Dashboard protegido.

---

## Índice

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación (Desarrollo Local)](#instalación-desarrollo-local)
- [Endpoints de la API](#endpoints-de-la-api)
- [Capturas de Pantalla](#capturas-de-pantalla)

---

## Características

- **Acortamiento de URLs**: Creación de URLs cortas desde el Dashboard, accesible solo para usuarios autenticados.
- **Registro y Autenticación**: Registro de usuarios con `username`, `email` y `password`. Autenticación con `username` y `password` para generar un token JWT y acceder al Dashboard.
- **Estadísticas de Clics**: Visualización de la cantidad de clics y fechas de eventos para cada URL, con gráficos interactivos.
- **Dashboard**:
  - Muestra las URLs acortadas del usuario (URL original, URL corta, clics, fecha de creación).
  - Permite copiar URLs al portapapeles.
  - Ofrece analíticas por URL (gráficos de clics por fecha).
  - Incluye un gráfico general de clics totales.
- **Interfaz Responsiva**: Diseñada con Tailwind CSS y Material-UI para una experiencia de usuario optimizada.
- **Notificaciones**: Mensajes informativos mediante React Hot Toast.
- **API RESTful**: Gestiona URLs, usuarios y analíticas.

---

## Tecnologías Utilizadas

### Backend

- **Spring Boot 3.4.5**: Framework Java para la API RESTful.
- **Spring Data JPA**: Operaciones con base de datos PostgreSQL.
- **Spring Security**: Autenticación y autorización con JWT.
- **PostgreSQL**: Base de datos (NeonTech en producción).
- **Lombok**: Reducción de código repetitivo.
- **JJWT**: Generación y validación de JSON Web Tokens.

### Frontend

- **React 19**: Interfaz de usuario.
- **Vite**: Herramienta de construcción y servidor de desarrollo.
- **Tailwind CSS**: Estilizado basado en utilidades.
- **Material-UI**: Componentes de interfaz.
- **TanStack Query**: Gestión de datos.
- **Axios**: Solicitudes HTTP.
- **Chart.js & React-ChartJS-2**: Gráficos de analíticas.
- **React Hook Form**: Manejo de formularios.
- **React Router**: Enrutamiento.
- **React Hot Toast**: Notificaciones.
- **React Copy to Clipboard**: Copia de URLs.

### Herramientas de Desarrollo

- **TypeScript**: JavaScript con tipado seguro.
- **ESLint**: Linting para calidad del código.
- **Maven**: Gestión de dependencias del backend.
- **pnpm**: Gestión de dependencias del frontend.
- **Docker**: Contenerización del backend.
- **NeonTech**: Base de datos en producción.
- **Netlify**: Despliegue del frontend.
- **Render**: Despliegue del backend.

---

## Estructura del Proyecto

El proyecto está organizado en dos directorios principales: `url-shortener-server` (backend) y `url-shortener-client` (frontend).

### Backend (`url-shortener-server/src`)

```bash
├── main/
│   ├── java/
│   │   └── com/
│   │       └── url/
│   │           └── shortener/
│   │               ├── UrlShortenerApplication.java
│   │               ├── controller/
│   │               │   ├── AuthController.java
│   │               │   ├── RedirectController.java
│   │               │   └── UrlMappingController.java
│   │               ├── dtos/
│   │               │   ├── ClickEventResponse.java
│   │               │   ├── LoginRequest.java
│   │               │   ├── RegisterRequest.java
│   │               │   └── UrlMappingResponse.java
│   │               ├── models/
│   │               │   ├── ClickEvent.java
│   │               │   ├── UrlMapping.java
│   │               │   └── User.java
│   │               ├── repository/
│   │               │   ├── ClickEventRepository.java
│   │               │   ├── UrlMappingRepository.java
│   │               │   └── UserRepository.java
│   │               ├── security/
│   │               │   ├── WebConfig.java
│   │               │   ├── WebSecurityConfig.java
│   │               │   └── jwt/
│   │               │       ├── JwtAuthenticationFilter.java
│   │               │       ├── JwtAuthenticationResponse.java
│   │               │       └── JwtUtils.java
│   │               └── service/
│   │                   ├── UrlMappingService.java
│   │                   ├── UserDetailsImpl.java
│   │                   ├── UserDetailsServiceImpl.java
│   │                   └── UserService.java
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/
    └── java/
        └── com/
            └── url/
                └── shortener/
                    └── UrlShortenerApplicationTests.java

```

### Frontend (`url-shortener-client/src`)

```bash
├── App.css
├── App.tsx
├── AppRouter.jsx
├── index.css
├── main.tsx
├── PrivateRoute.jsx
├── vite-env.d.ts
├── api/
│   └── api.js
├── assets/
│   └── react.svg
├── components/
│   ├── AboutPage.jsx
│   ├── Card.jsx
│   ├── ErrorPage.jsx
│   ├── Footer.jsx
│   ├── LandingPage.jsx
│   ├── Loader.jsx
│   ├── LoginPage.jsx
│   ├── Navbar.jsx
│   ├── RegisterPage.jsx
│   ├── ShortenUrlPage.jsx
│   ├── TextField.jsx
│   └── dashboard/
│       ├── CreateNewShorten.jsx
│       ├── DashboardLayout.jsx
│       ├── Graph.jsx
│       ├── ShortenItem.jsx
│       ├── ShortenPopUp.jsx
│       └── ShortenUrlList.jsx
├── context/
│   └── ContextApi.jsx
├── dummyData/
│   └── data.js
├── hooks/
│   └── useQuery.js
└── utils/
    ├── constant.js
    └── helper.js
```

---

## Requisitos Previos

- **Java 17**: Requerido para el backend.
- **Node.js 18+**: Requerido para el frontend.
- **PostgreSQL 13+**: Base de datos.
- **Maven**: Para construir el backend.
- **pnpm**: Para el frontend (opcional; npm o yarn son compatibles).
- **Docker**: Para contenerizar el backend (opcional, para despliegue).

---

## Instalación (Desarrollo Local)

Sigue estos pasos para configurar y ejecutar la aplicación en un entorno local.

### 1. Clonar el Repositorio

Clona el repositorio desde GitHub e ingresa al directorio del proyecto:

```bash
git clone https://github.com/tu-usuario/url-shortener.git
cd url-shortener
```

### 2. Configurar la Base de Datos

Asegúrate de que PostgreSQL esté instalado y en ejecución.

Crea una base de datos local llamada `url_shortener`.

### 3. Configurar el Backend

Navegar al directorio del backend:

```bash
cd url-shortener-server
```

Configurar las variables de entorno:
Crea un archivo `.env` en el directorio `url-shortener-server` con:

```env
DATABASE_URL=jdbc:postgresql://localhost:5432/url_shortener
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=<tu-contraseña-postgres>
DATABASE_DIALECT=org.hibernate.dialect.PostgreSQLDialect
JWT_SECRET=<tu-clave-secreta-jwt>
FRONTEND_URL=http://localhost:5173
```

Configurar `application.properties`:
En `src/main/resources`, asegura que `application.properties` contenga:

```properties
spring.application.name=url-shortener-server
spring.config.import=optional:file:.env[.properties]
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=${DATABASE_DIALECT}
spring.jpa.show-sql=true
jwt.secret=${JWT_SECRET}
jwt.expiration=172800000
frontend.url=${FRONTEND_URL}
```

Construir y ejecutar el backend:
Instala las dependencias y ejecuta la aplicación:

```bash
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en `http://localhost:8080`.

### 4. Configurar el Frontend

Navegar al directorio del frontend:

```bash
cd ../url-shortener-client
```

Instalar las dependencias:

```bash
pnpm install
```

Configurar las variables de entorno:
Crea un archivo `.env` en el directorio `url-shortener-client con`:

```env
VITE_BACKEND_URL=http://localhost:8080/api
VITE_REACT_FRONT_END_URL=http://localhost:5173
```

Ejecutar el servidor de desarrollo:
Inicia el servidor de desarrollo:

```bash
pnpm run dev
```

El frontend estará disponible en `http://localhost:5173`.

### 5. Accede a la aplicación

Abre `http://localhost:5173` en un navegador.

Regístrate con un `username`, `email` y `password`, o inicia sesión para acceder al dashboard.

En el dashboard, crea URLs acortadas, visualiza estadísticas y copia URLs al portapapeles.

---

## Endpoints de la API

La API proporciona los siguientes endpoints para gestionar usuarios, URLs acortadas y analíticas.

| Método | Endpoint                                                            | Descripción                                     | Autenticación  |
| ------ | ------------------------------------------------------------------- | ----------------------------------------------- | -------------- |
| POST   | `/api/auth/public/register`                                         | Registrar un nuevo usuario                      | No             |
| POST   | `/api/auth/public/login`                                            | Iniciar sesión y obtener token JWT              | No             |
| POST   | `/api/urls/shorten`                                                 | Crear una URL acortada                          | Sí (ROLE_USER) |
| GET    | `/{short-url}`                                                      | Redirigir a la URL original                     | No             |
| GET    | `/api/urls/my-urls`                                                 | Listar URLs acortadas del usuario               | Sí (ROLE_USER) |
| GET    | `/api/urls/analytics/{short-url}?start-date={date}&end-date={date}` | Obtener analíticas de una URL (clics por fecha) | Sí (ROLE_USER) |
| GET    | `/api/urls/total-clicks?start-date={date}&end-date={date}`          | Obtener clics totales del usuario por fecha     | Sí (ROLE_USER) |

---

## Capturas de Pantalla

Las siguientes capturas de pantalla muestran las principales vistas de la aplicación:

- **Home**
  ![Home](https://i.ibb.co/pvT79kwd/unrivaled-pithivier-d740dc-netlify-app.png)

- **Dashboard**
  ![Dashboard](https://i.ibb.co/rGt8kPrn/unrivaled-pithivier-d740dc-netlify-app-3.png)

- **Página Acerca de**
  ![About Page](https://i.ibb.co/LD79ngp6/unrivaled-pithivier-d740dc-netlify-app-1.png)

- **Página de Error**
  ![Error Page](https://i.ibb.co/dszJFYFT/unrivaled-pithivier-d740dc-netlify-app-2.png)

---
