import StarshipRepository from './starship-repository'
import { Starship, QueryParams } from './starship'

export default class StarshipModel {
	constructor(private readonly repository: StarshipRepository) {}

	async find(id: number): Promise<Starship | null> {
		return await this.repository.find(id)
	}

	async search(query: QueryParams): Promise<Starship[]> {
		return await this.repository.search(query)
	}
}
