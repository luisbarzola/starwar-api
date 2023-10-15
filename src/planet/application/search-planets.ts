import type PlanetRepository from '../domain/planet-repository'
import PlanetModel from '../domain/planet-model'
import type { Planet } from '../domain/planet'
import { QueryParams } from '../../share/application/query'

export default class SearchPlanets {
	private readonly planetModel: PlanetModel

	constructor(planetRepository: PlanetRepository) {
		this.planetModel = new PlanetModel(planetRepository)
	}

	async execute(query: QueryParams): Promise<Planet[]> {
		return await this.planetModel.search(query)
	}
}
