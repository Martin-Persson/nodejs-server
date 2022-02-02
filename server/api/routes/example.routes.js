import { Router } from 'express'
import { exampleController } from '../controllers/example.controller.js'

const router = Router()

router.route('/').get(exampleController).post(exampleController)

router
  .route('/:id')
  .get(exampleController)
  .put(exampleController)
  .delete(exampleController)

export default router
