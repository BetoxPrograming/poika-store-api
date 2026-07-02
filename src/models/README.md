# src/models

## Funcionalidad

Este directorio contiene los modelos de TypeScript. Un modelo define la forma que deben tener los datos dentro de la aplicación.

## Paso actual en el pipeline MVC

El modelo representa la estructura de los datos que viajan por el pipeline. Ayuda a que TypeScript detecte errores antes de ejecutar el programa.

Flujo relacionado:

```txt
Database row -> Model -> Service -> Controller -> JSON
```

## En esta clase

`category.model.ts` define cómo se ve una categoría en la base de datos y cómo se representa dentro del código TypeScript.
