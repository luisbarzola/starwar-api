import express from 'express'
import type { Application, NextFunction, Response, Request } from 'express'
import { peopleRouter } from './person/infrastructure/rest-api/people-router'
import { planetsRouter } from './planet/infrastructure/rest-api/planet-router'
import { filmsRouter } from './film/infrastructure/rest-api/film-router'
import { starshipRouter } from './starship/infrastructure/rest-api/starship-router'

const server: Application = express()
server.disable('x-powered-by')

server.use('/people', peopleRouter)
server.use('/planets', planetsRouter)
server.use('/films', filmsRouter)
server.use('/starships', starshipRouter)

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error('Something broke!')
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

const PORT = process.env.PORT ?? 3000

server.listen(PORT, () => {
	console.log(`running server on http://localhost:${PORT}`)
})
