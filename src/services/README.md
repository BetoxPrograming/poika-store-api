# src/services

## Funcionalidad

Este directorio contiene los servicios. Un servicio representa la lógica de negocio de la aplicación.

## Paso actual en el pipeline MVC

El servicio está entre el controlador y el repositorio. Decide qué operación debe ejecutarse según la necesidad del caso de uso.

Flujo relacionado:

```txt
Controller -> Service -> Repository
```

## En esta clase

`category.service.ts` decide si se deben consultar todas las categorías o solamente las categorías activas.
