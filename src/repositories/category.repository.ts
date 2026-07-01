import { pool } from '../database/pool.js'
import type { Category, CategoryRow } from '../models/category.model.js'

const mapCategoryRowToCategory = (row: CategoryRow): Category => {
    return {
        idCategory: row.id_category,
        description: row.description,
        imagePath: row.image_path,
        active: row.active,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
    }
}

export const findAllCategories = async (): Promise<Category[]> => {
    const result = await pool.query<CategoryRow>(
        `
    SELECT
      id_category,
      description,
      image_path,
      active,
      created_at,
      updated_at
    FROM categories
    ORDER BY id_category;
    `,
    )

    return result.rows.map(mapCategoryRowToCategory)
}

export const findActiveCategories = async (): Promise<Category[]> => {
    const result = await pool.query<CategoryRow>(
        `
    SELECT
      id_category,
      description,
      image_path,
      active,
      created_at,
      updated_at
    FROM categories
    WHERE active = TRUE
    ORDER BY id_category;
    `,
    )

    return result.rows.map(mapCategoryRowToCategory)
}