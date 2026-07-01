import type { Category } from '../models/category.model.js'
import {
    findActiveCategories,
    findAllCategories,
} from '../repositories/category.repository.js'

export const getCategories = async (activeOnly: boolean): Promise<Category[]> => {
    if (activeOnly) {
        return findActiveCategories()
    }

    return findAllCategories()
}