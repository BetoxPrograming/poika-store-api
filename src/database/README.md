# src/database

## Funcionalidad

Este directorio contiene la conexión técnica entre TypeScript y PostgreSQL. Aquí se configura el pool de conexiones y se ejecutan archivos SQL cuando se necesita correr migraciones o seeds.

## Paso actual en el pipeline MVC

Esta carpeta conecta el código con la base de datos. Es usada por los repositorios para ejecutar consultas SQL.

Flujo relacionado:

```txt
Repository -> Pool -> PostgreSQL
```

## En esta clase

`pool.ts` crea la conexión reutilizable con PostgreSQL y `run-sql-file.ts` permite ejecutar archivos SQL desde la terminal.
