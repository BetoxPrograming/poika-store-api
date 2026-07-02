# database

## Funcionalidad

Este directorio contiene los archivos SQL del proyecto. Aquí se documenta cómo se crea la estructura de la base de datos y cómo se cargan datos iniciales para poder probar la API.

## Paso actual en el pipeline MVC

Este directorio funciona como la base externa del modelo. No es parte directa del código TypeScript, pero define las tablas que luego serán consultadas por los repositorios.

Flujo relacionado:

```txt
Base de datos -> Repository -> Service -> Controller -> Route -> Cliente
```

## En esta clase

En este punto se trabaja principalmente con la tabla de categorías, equivalente a la entidad `Categoria` del proyecto Java.
