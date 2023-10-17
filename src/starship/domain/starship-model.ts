import StarshipRepository from './starship-repository'
import { Starship, QueryParams, StarshipPagination } from './starship'

export default class StarshipModel {
	constructor(private readonly repository: StarshipRepository) {}

	async find(id: number): Promise<Starship | null> {
		return await this.repository.find(id)
	}

	async search(query: QueryParams): Promise<StarshipPagination> {
		return await this.repository.search(query)
	}
}
