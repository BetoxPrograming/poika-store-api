# database/seeds

## Funcionalidad

Este directorio contiene los datos iniciales de prueba. Un seed inserta registros base para poder probar la aplicación sin tener que escribirlos manualmente.

## Paso actual en el pipeline MVC

Los seeds alimentan el modelo con datos reales. Luego, esos datos pueden viajar por el pipeline MVC hasta llegar al frontend.

Flujo relacionado:

```txt
Seed -> Datos en tabla -> Repository -> Service -> Controller -> Response JSON
```

## En esta clase

Aquí se insertan categorías iniciales para probar el listado de categorías desde la API.
