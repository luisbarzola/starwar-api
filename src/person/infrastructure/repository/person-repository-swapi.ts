import fetch from 'node-fetch'
import type PersonRepositoryInterface from '../../domain/person-repository'
import { Person, QueryParams, PersonPagination } from '../../domain/person'
import { getFirstNumberFromUrl } from '../../../share/infrastructure/repository/utils'
import { PersonResponse } from './person-res-api'
import SwapiRepository from '../../../share/infrastructure/repository/swapi/swapi-repository'

const url = 'https://swapi.dev/api/people'
const swapiRepository = new SwapiRepository(url)

export default class PersonRepository implements PersonRepositoryInterface {
	async find(id: number): Promise<Person | null> {
		try {
			const response = await fetch(`${url}/${id}/`)

			if (response.status !== 200) {
				return null
			}

			const personJson = await response.json()

			if (personJson.detail === 'Not found') return null

			return toPerson(personJson as PersonResponse)
		} catch (error) {
			console.error(error)
			return null
		}
	}

	async search(query: QueryParams): Promise<PersonPagination> {
		return (await swapiRepository.search(query, toPerson)) as PersonPagination
	}
}

function toPerson(response: PersonResponse): Person {
	return {
		id: getFirstNumberFromUrl(response.url),
		name: response.name,
		height: parseInt(response.height),
		mass: response.mass,
		hair_color: response.hair_color,
		skin_color: response.skin_color,
		eye_color: response.eye_color,
		birth_year: response.birth_year,
		gender: response.gender,
		planet_id: getFirstNumberFromUrl(response.homeworld),
		films_id: response.films.map(url => getFirstNumberFromUrl(url)),
		species: response.species.map(url => getFirstNumberFromUrl(url)),
		starships_id: response.starships.map(url => getFirstNumberFromUrl(url)),
	}
}
