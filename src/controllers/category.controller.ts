import type { Request, Response } from 'express'

import { getCategories } from '../services/category.service.js'

export const getCategoryList = async (req: Request, res: Response) => {
    try {
        const activeOnly = req.query.activeOnly !== 'false'
        const categories = await getCategories(activeOnly)

        res.json({
            data: categories,
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Error fetching categories.',
        })
    }
}