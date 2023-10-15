import StarshipModel from '../domain/starship-model'
import StarshipRepository from '../domain/starship-repository'
import { QueryParams } from '../../share/application/query'
import { Starship } from '../domain/starship'

export default class SearchStarships {
	private readonly starshipModel: StarshipModel

	constructor(repository: StarshipRepository) {
		this.starshipModel = new StarshipModel(repository)
	}

	async execute(query: QueryParams): Promise<Starship[]> {
		return await this.starshipModel.search(query)
	}
}
