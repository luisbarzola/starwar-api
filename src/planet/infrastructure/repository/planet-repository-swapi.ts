import fetch from 'node-fetch'
import type PlanetRepositoryInterface from '../../domain/planet-repository'
import { Planet, QueryParams, PlanetPagination } from '../../domain/planet'
import { getFirstNumberFromUrl } from '../../../share/infrastructure/repository/utils'
import { PlanetResponse } from './planet-res-api'
import SwapiRepository from '../../../share/infrastructure/repository/swapi/swapi-repository'

const url = 'https://swapi.dev/api/planets'
const swapiRepository = new SwapiRepository(url)

export default class PlanetRepositorySwapi
	implements PlanetRepositoryInterface
{
	async find(id: number): Promise<Planet | null> {
		try {
			const response = await fetch(`${url}/${id}/`)

			if (response.status !== 200) {
				return null
			}

			const planetJson = await response.json()

			if (planetJson.detail === 'Not found') return null

			return toPlanet(planetJson as PlanetResponse)
		} catch (error) {
			console.error(error)
			return null
		}
	}

	async search(query: QueryParams): Promise<PlanetPagination> {
		return (await swapiRepository.search(query, toPlanet)) as PlanetPagination
	}
}

function toPlanet(response: PlanetResponse): Planet {
	return {
		id: getFirstNumberFromUrl(response.url),
		name: response.name,
		rotation_period: response.rotation_period,
		orbital_period: response.orbital_period,
		diameter: response.diameter,
		climate: response.climate,
		gravity: response.gravity,
		terrain: response.terrain,
		surface_water: response.surface_water,
		population: response.population,
		residents_id: response.residents.map(url => getFirstNumberFromUrl(url)),
		films_id: response.films.map(url => getFirstNumberFromUrl(url)),
	}
}
