# src/controllers

## Funcionalidad

Este directorio contiene los controladores. Un controlador recibe la solicitud HTTP, interpreta lo que se pidió y decide qué servicio debe usar.

## Paso actual en el pipeline MVC

El controlador es la entrada lógica al caso de uso. No consulta directamente la base de datos; delega esa responsabilidad al servicio.

Flujo relacionado:

```txt
Route -> Controller -> Service
```

## En esta clase

`category.controller.ts` recibe la petición para listar categorías y devuelve una respuesta JSON al cliente.
