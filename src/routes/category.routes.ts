import { Router } from 'express'

import { getCategoryList } from '../controllers/category.controller.js'

export const categoryRouter = Router()

categoryRouter.get('/', getCategoryList)