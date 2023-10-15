import express from 'express'
import controller from './film-controller-builder'

const filmsRouter = express.Router()

filmsRouter.get('/', controller.searchFilms.bind(controller))

export { filmsRouter }
