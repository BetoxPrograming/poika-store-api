# Lesson 03 — Database, Backend Layers and Categories

## 🎯 Lesson goal

In this lesson, Póika Store API starts working with a real database and follows a layered backend structure.

The main goal is to move from this idea:

```txt
The database has a categories table.
```

to this:

```txt
The API can read categories from PostgreSQL using organized backend layers.
```

This lesson is the TypeScript version of the Java class where the project connects to MySQL and creates the `Categoria`, `CategoriaRepository`, `CategoriaService`, and `CategoriaController` flow.

---

## 🧠 Main concept: layered backend

The backend is divided into layers so each part has one clear responsibility.

```txt
Route
↓
Controller
↓
Service
↓
Repository
↓
Database
```

This avoids putting all the logic in one file.

A simple project can connect directly to the database from the same file that handles the request, but that gets messy when the project grows.

In this project, each layer has a job.

---

## 🏗️ Java class equivalent

In the Java project, the flow is:

```txt
MySQL
↓
Categoria.java
↓
CategoriaRepository.java
↓
CategoriaService.java
↓
CategoriaController.java
↓
Thymeleaf view
```

In Póika Store API, the equivalent flow is:

```txt
Aiven PostgreSQL
↓
category.model.ts
↓
category.repository.ts
↓
category.service.ts
↓
category.controller.ts
↓
category.routes.ts
↓
React frontend
```

The main difference is that Java returns a Thymeleaf HTML view, while this API returns JSON for the React frontend.

---

## 🗄️ Database

The database used in this project is PostgreSQL hosted on Aiven.

The API connects to Aiven using the `DATABASE_URL` stored in the local `.env` file.

The `.env` file is not uploaded to GitHub because it contains private credentials.

The public reference file is:

```txt
.env.example
```

That file shows which environment variables are required without exposing secrets.

---

## 📁 Project structure created in this lesson

```txt
src/
├── config/
├── controllers/
├── database/
├── models/
├── repositories/
├── routes/
├── services/
├── app.ts
└── server.ts

database/
├── migrations/
└── seeds/
```

---

## ⚙️ `config`

The `config` folder stores general project configuration.

Current file:

```txt
src/config/env.ts
```

This file reads environment variables such as:

```txt
PORT
DATABASE_URL
DB_SSL
```

Its job is not to connect to the database directly.  
Its job is only to centralize configuration values.

---

## 🔌 `database`

The `database` folder stores files related to the database connection and database scripts.

Current important files:

```txt
src/database/pool.ts
src/database/run-sql-file.ts
```

`pool.ts` creates the PostgreSQL connection pool using the `pg` package.

`run-sql-file.ts` allows the project to execute SQL files from the terminal.

This makes migrations and seeds reusable instead of manually copying SQL into a database tool.

---

## 🧱 Migrations and seeds

The SQL files are stored outside `src` because they are database resources, not application source code.

```txt
database/migrations/
database/seeds/
```

A migration changes the database structure.

Example:

```txt
Create the categories table.
```

A seed inserts initial test data.

Example:

```txt
Insert Electronics, Furniture, Clothing and Video Games categories.
```

This is cleaner than having one loose SQL file with everything mixed together.

---

## 🧩 `models`

The `models` folder defines the shape of the data in TypeScript.

Current file:

```txt
src/models/category.model.ts
```

This file defines two interfaces:

```txt
CategoryRow
Category
```

`CategoryRow` represents the data as it comes from PostgreSQL.

Example:

```txt
id_category
image_path
created_at
```

`Category` represents the data as the API should use it.

Example:

```txt
idCategory
imagePath
createdAt
```

This keeps the API code clean and consistent with TypeScript naming conventions.

---

## 🗃️ `repositories`

The `repositories` folder contains the files that communicate directly with the database.

Current file:

```txt
src/repositories/category.repository.ts
```

This file contains SQL queries such as:

```sql
SELECT * FROM categories;
```

The repository is the only layer that should know the SQL details.

It currently has functions to:

```txt
find all categories
find only active categories
```

This is similar to Java's `CategoriaRepository`, but in TypeScript we write the SQL manually instead of using `JpaRepository`.

---

## 🧠 `services`

The `services` folder contains business logic.

Current file:

```txt
src/services/category.service.ts
```

The service does not write SQL directly.

Its job is to decide what should happen.

For categories, it decides:

```txt
If activeOnly is true, return only active categories.
If activeOnly is false, return all categories.
```

This is similar to the Java method `getCategorias(boolean activo)`.

---

## 🌐 `controllers`

The `controllers` folder receives HTTP requests and sends HTTP responses.

Current file:

```txt
src/controllers/category.controller.ts
```

The controller receives a request like:

```txt
GET /api/categories
```

Then it calls the service and returns JSON.

The controller should not write SQL directly.  
It should only coordinate the request and response.

---

## 🛣️ `routes`

The `routes` folder defines the API URLs.

Current files:

```txt
src/routes/health.routes.ts
src/routes/database.routes.ts
src/routes/category.routes.ts
```

Examples:

```txt
GET /api/health
GET /api/database/health
GET /api/categories
```

Routes connect URLs to controller functions.

---

## 🚀 `app.ts` and `server.ts`

`app.ts` configures Express.

It includes:

```txt
CORS
JSON support
main routes
```

`server.ts` starts the server.

The idea is:

```txt
app.ts = configure the API
server.ts = run the API
```

This separation keeps the project easier to understand and maintain.

---

## ✅ Endpoints created

### Health endpoint

```txt
GET /api/health
```

Checks if the API is running.

### Database health endpoint

```txt
GET /api/database/health
```

Checks if the API can connect to PostgreSQL.

### Categories endpoint

```txt
GET /api/categories
```

Returns active categories by default.

```txt
GET /api/categories?activeOnly=false
```

Returns all categories, including inactive ones.

---

## 🔐 Git and ignored files

The `.gitignore` file prevents local and sensitive files from being uploaded.

Important ignored files:

```txt
.env
node_modules/
dist/
.idea/
```

The `.env` file must stay local because it contains the database connection string.

Only `.env.example` should be uploaded.

---

## 🧪 Useful commands

Run the API in development:

```bash
npm run dev
```

Build the TypeScript project:

```bash
npm run build
```

Run database migration:

```bash
npm run db:migrate
```

Run database seed:

```bash
npm run db:seed
```

---

## 🧾 Commits from this lesson

Suggested commit style used in this lesson:

```txt
✨ feat(database): add PostgreSQL connection
✨ feat(database): add category migrations and seeds
✨ feat(category): add category model
✨ feat(category): add category repository
✨ feat(category): add category service
✨ feat(category): add category API endpoint
```

---

## 🧠 Final summary

Lesson 03 teaches how to connect the API to a database and organize backend code by responsibility.

The most important idea is not the database itself.

The most important idea is the flow:

```txt
Request
↓
Route
↓
Controller
↓
Service
↓
Repository
↓
Database
```

This structure makes the project easier to grow when new entities are added later, such as products, users, orders or invoices.
