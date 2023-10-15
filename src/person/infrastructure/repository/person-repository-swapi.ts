import fetch from 'node-fetch'
import type PersonRepositoryInterface from '../../domain/person-repository'
import { Person, QueryParams } from '../../domain/person'
import { getFirstNumberFromUrl } from '../../../share/infrastructure/repository/utils'
import { PersonResponse, PersonsResponse } from './person-res-api'

const url = 'https://swapi.dev/api/people'

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

	async search(query: QueryParams): Promise<Person[]> {
		const queryUrl = query.page !== null ? `/?page=${query.page}` : ``
		try {
			const response = await fetch(`${url}${queryUrl}`)
			const personJson = await response.json()

			return toPersons(personJson as PersonsResponse)
		} catch (error) {
			console.error(error)
			return []
		}
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

function toPersons(response: PersonsResponse): Person[] {
	return response.results.map(person => toPerson(person))
}
