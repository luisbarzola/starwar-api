import FilmRepository from './film-repository'
import { Film, QueryParams } from './film'

export default class FilmModel {
	constructor(private readonly repository: FilmRepository) {}

	async find(id: number): Promise<Film | null> {
		return await this.repository.find(id)
	}

	async search(query: QueryParams): Promise<Film[]> {
		return await this.repository.search(query)
	}
}
