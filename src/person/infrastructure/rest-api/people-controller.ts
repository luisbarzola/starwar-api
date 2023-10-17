import FindFullPerson from '../../application/find-full-person'
import type FindPerson from '../../application/find-person'
import type AllPersons from '../../application/search-persons'
import type { Request, Response } from 'express'
import type { QueryParams } from '../../../share/application/query'

export default class PeopleController {
	constructor(
		private readonly findPerson: FindPerson,
		private readonly findFullPerson: FindFullPerson,
		private readonly allPersons: AllPersons,
	) {}

	async find(req: Request, res: Response): Promise<void> {
		const person = await this.findPerson.execute(parseInt(req.params.id))

		if (person === null || person === undefined) {
			res.status(404).send()
			return
		}

		res.send(person)
	}

	async findFull(req: Request, res: Response): Promise<void> {
		const person = await this.findFullPerson.execute(parseInt(req.params.id))

		if (person === null) {
			res.status(404).send()
			return
		}

		res.send(person)
	}

	async searchPersons(req: Request, res: Response): Promise<void> {
		const page =
			typeof req.query.page === 'string' ? parseInt(req.query.page) : null
		const q = typeof req.query.q === 'string' ? req.query.q : null

		const query: QueryParams = {
			page,
			q,
		}

		res.send(await this.allPersons.execute(query))
	}
}
