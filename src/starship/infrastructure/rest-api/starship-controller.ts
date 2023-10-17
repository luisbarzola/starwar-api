import type { Request, Response } from 'express'
import type { QueryParams } from '../../../share/application/query'
import SearchStarships from '../../application/search-starship'

export default class StarshipController {
	constructor(private readonly operation: SearchStarships) {}

	async searchStarShips(req: Request, res: Response): Promise<void> {
		const page =
			typeof req.query.page === 'string' ? parseInt(req.query.page) : null
		const q = typeof req.query.q === 'string' ? req.query.q : null

		const query: QueryParams = {
			page,
			q,
		}

		res.send(await this.operation.execute(query))
	}
}
