# src/routes

## Funcionalidad

Este directorio contiene las rutas de Express. Una ruta define qué URL existe y qué controlador debe responder cuando esa URL recibe una petición.

## Paso actual en el pipeline MVC

La ruta es la primera capa del pipeline cuando llega una solicitud HTTP. Su trabajo es conectar la URL con el controlador correcto.

Flujo relacionado:

```txt
Request HTTP -> Route -> Controller
```

## En esta clase

`category.routes.ts` define la ruta para consultar categorías. También existen rutas de salud de la API y de conexión con base de datos.
