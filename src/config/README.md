# src/config

## Funcionalidad

Este directorio contiene la configuración general de la aplicación. Aquí se leen las variables de entorno, como el puerto del servidor y los datos de conexión a la base de datos.

## Paso actual en el pipeline MVC

La configuración no es una capa MVC, pero sostiene todo el pipeline. Sin esta carpeta, la API no sabe en qué puerto correr ni cómo conectarse a la base de datos.

Flujo relacionado:

```txt
.env -> config -> database pool -> repository
```

## En esta clase

Se usa `env.ts` para centralizar la configuración y evitar escribir datos sensibles directamente en el código.
