import FilmModel from '../domain/film-model'
import FilmRepository from '../domain/film-repository'
import { QueryParams } from '../../share/application/query'
import { FilmPagination } from '../domain/film'

export default class SearchFilms {
	private readonly filmModel: FilmModel

	constructor(repository: FilmRepository) {
		this.filmModel = new FilmModel(repository)
	}

	async execute(query: QueryParams): Promise<FilmPagination> {
		return await this.filmModel.search(query)
	}
}
