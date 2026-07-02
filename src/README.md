# src

## Funcionalidad

Este directorio contiene el código fuente principal de la API en TypeScript. Aquí vive la aplicación Express, la configuración, las rutas, los controladores, los servicios, los repositorios, los modelos y la conexión a base de datos.

## Paso actual en el pipeline MVC

`src` contiene todo el flujo MVC de la API.

Flujo principal:

```txt
Request HTTP -> Route -> Controller -> Service -> Repository -> Database
Database -> Repository -> Service -> Controller -> Response JSON
```

## En esta clase

En este punto se implementa el flujo para consultar categorías desde PostgreSQL y devolverlas como JSON.
