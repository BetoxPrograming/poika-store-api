# src/repositories

## Funcionalidad

Este directorio contiene los repositorios. Un repositorio se encarga de hablar directamente con la base de datos.

## Paso actual en el pipeline MVC

El repositorio es la capa de acceso a datos. Aquí viven las consultas SQL y el mapeo entre filas de base de datos y objetos TypeScript.

Flujo relacionado:

```txt
Service -> Repository -> Database
```

## En esta clase

`category.repository.ts` consulta las categorías, permite traer todas o solo las activas, y convierte cada fila SQL en un objeto `Category`.
