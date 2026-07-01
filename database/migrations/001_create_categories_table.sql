CREATE TABLE IF NOT EXISTS categories (
                                          id_category SERIAL PRIMARY KEY,
                                          description VARCHAR(100) NOT NULL UNIQUE,
    image_path VARCHAR(1024),
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );