import fetch from 'node-fetch'
import type StarshipRepositoryInterface from '../../domain/starship-repository'
import {
	Starship,
	QueryParams,
	StarshipPagination,
} from '../../domain/starship'
import { getFirstNumberFromUrl } from '../../../share/infrastructure/repository/utils'
import { StarshipResponse } from './starship-res-api'
import SwapiRepository from '../../../share/infrastructure/repository/swapi/swapi-repository'

const url = 'https://swapi.dev/api/starships'
const swapiRepository = new SwapiRepository(url)

export default class StarshipRepository implements StarshipRepositoryInterface {
	async find(id: number): Promise<Starship | null> {
		try {
			const response = await fetch(`${url}/${id}/`)

			if (response.status !== 200) {
				return null
			}

			const starshipJson = await response.json()

			if (starshipJson.detail === 'Not found') return null

			return toStarship(starshipJson as StarshipResponse)
		} catch (error) {
			console.error(error)
			return null
		}
	}

	async search(query: QueryParams): Promise<StarshipPagination> {
		return (await swapiRepository.search(
			query,
			toStarship,
		)) as StarshipPagination
	}
}

function toStarship(response: StarshipResponse): Starship {
	return {
		id: getFirstNumberFromUrl(response.url),
		name: response.name,
		model: response.model,
		manufacturer: response.manufacturer,
		cost_in_credits: response.cost_in_credits,
		length: response.length,
		max_atmosphering_speed: response.max_atmosphering_speed,
		crew: response.crew,
		passengers: response.passengers,
		cargo_capacity: response.cargo_capacity,
		consumables: response.consumables,
		hyperdrive_rating: response.hyperdrive_rating,
		mglt: response.MGLT,
		starship_class: response.starship_class,
		pilots_id: response.pilots.map(url => getFirstNumberFromUrl(url)),
		films_id: response.films.map(url => getFirstNumberFromUrl(url)),
	}
}
