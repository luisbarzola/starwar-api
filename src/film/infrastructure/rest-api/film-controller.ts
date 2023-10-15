import type { Request, Response } from 'express'
import type { QueryParams } from '../../../share/application/query'
import SearchFilms from '../../application/search-films'

export default class FilmController {
	constructor(private readonly operation: SearchFilms) {}

	async searchFilms(req: Request, res: Response): Promise<void> {
		const page =
			typeof req.query.page === 'string' ? parseInt(req.query.page) : null

		const query: QueryParams = {
			page,
		}

		res.send(await this.operation.execute(query))
	}
}
