import express from 'express'
import type { Application, NextFunction, Response, Request } from 'express'
import { peopleRouter } from './person/infrastructure/rest-api/people-router'
import { planetsRouter } from './planet/infrastructure/rest-api/planet-router'
import { filmsRouter } from './film/infrastructure/rest-api/film-router'
import { starshipRouter } from './starship/infrastructure/rest-api/starship-router'
import cors from 'cors'

const app: Application = express()
app.disable('x-powered-by')
app.use(cors<Request>())

app.use((req, res, next) => {
	console.log({
		date: new Date(),
		req: req.method,
		url: req.url,
	})

	next()
})

app.use('/people', peopleRouter)
app.use('/planets', planetsRouter)
app.use('/films', filmsRouter)
app.use('/starships', starshipRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error('Something broke!')
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

const PORT = process.env.PORT ?? 3000

const server = app.listen(PORT, () => {
	console.log(`running server on http://localhost:${PORT}`)
})

export { app, server }
