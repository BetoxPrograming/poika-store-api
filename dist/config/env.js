import dotenv from 'dotenv';
dotenv.config();
export const env = {
    port: Number(process.env.PORT ?? 3000),
    database: {
        url: process.env.DATABASE_URL ?? '',
        host: process.env.DB_HOST ?? 'localhost',
        port: Number(process.env.DB_PORT ?? 5432),
        user: process.env.DB_USER ?? 'postgres',
        password: process.env.DB_PASSWORD ?? '',
        name: process.env.DB_NAME ?? 'poika_store',
        ssl: process.env.DB_SSL === 'true',
    },
};
