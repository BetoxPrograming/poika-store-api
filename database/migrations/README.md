# database/migrations

## Funcionalidad

Este directorio contiene las migraciones SQL. Una migración es un archivo que crea o modifica la estructura de la base de datos.

## Paso actual en el pipeline MVC

Las migraciones preparan la parte física del modelo. Antes de que TypeScript pueda consultar categorías, la tabla debe existir en la base de datos.

Flujo relacionado:

```txt
Migration -> Tabla creada -> Repository puede consultar datos
```

## En esta clase

Aquí se crea la tabla `categories`, que representa las categorías de productos de la tienda.
