import PlanetRepository from './planet-repository'
import { Planet, QueryParams } from './planet'

export default class PlanetModel {
	constructor(private readonly repository: PlanetRepository) {}

	async find(id: number): Promise<Planet | null> {
		return await this.repository.find(id)
	}

	async search(query: QueryParams): Promise<Planet[]> {
		return await this.repository.search(query)
	}
}
