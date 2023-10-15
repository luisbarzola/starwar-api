import express from 'express'
import controller from './planet-controller-builder'

const planetsRouter = express.Router()

planetsRouter.get('/', controller.searchPlanets.bind(controller))

export { planetsRouter }
