import express from 'express'
import controller from './people-controller-builder'

const peopleRouter = express.Router()

peopleRouter.get('/', controller.searchPersons.bind(controller))
peopleRouter.get('/:id', controller.find.bind(controller))
peopleRouter.get('/:id/full', controller.findFull.bind(controller))

export { peopleRouter }
