import fetch from 'node-fetch'
import type FilmRepositoryInterface from '../../domain/film-repository'
import { Film, QueryParams, FilmPagination } from '../../domain/film'
import { getFirstNumberFromUrl } from '../../../share/infrastructure/repository/utils'
import { FilmResponse } from './film-res-api'
import SwapiRepository from '../../../share/infrastructure/repository/swapi/swapi-repository'

const url = 'https://swapi.dev/api/films'

const swapiRepository = new SwapiRepository(url)

export default class FilmRepository implements FilmRepositoryInterface {
	async find(id: number): Promise<Film | null> {
		try {
			const response = await fetch(`${url}/${id}/`)

			if (response.status !== 200) {
				return null
			}

			const filmJson = await response.json()

			if (filmJson.detail === 'Not found') return null

			return toFilm(filmJson as FilmResponse)
		} catch (error) {
			console.error(error)
			return null
		}
	}

	async search(query: QueryParams): Promise<FilmPagination> {
		return (await swapiRepository.search(query, toFilm)) as FilmPagination
	}
}

function toFilm(response: FilmResponse): Film {
	return {
		id: getFirstNumberFromUrl(response.url),
		title: response.title,
		episode_id: response.episode_id,
		opening_crawl: response.opening_crawl,
		director: response.director,
		producer: response.producer,
		release_date: response.release_date,
		characters_id: response.characters.map(url => getFirstNumberFromUrl(url)),
		planets_id: response.planets.map(url => getFirstNumberFromUrl(url)),
		starships_id: response.starships.map(url => getFirstNumberFromUrl(url)),
	}
}
