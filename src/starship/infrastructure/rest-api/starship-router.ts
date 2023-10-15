import express from 'express'
import controller from './starship-controller-builder'

const starshipRouter = express.Router()

starshipRouter.get('/', controller.searchStarShips.bind(controller))

export { starshipRouter }
