import type PersonRepositoryInterface from '../../domain/person-repository'
import { Person, QueryParams, PersonPagination } from '../../domain/person'
import { RepositoryMemory } from '../../../share/infrastructure/repository/memory/repository-memory'

export const people = [
	[
		{
			id: 1,
			name: 'Luke Skywalker',
			height: 172,
			mass: '77',
			hair_color: 'blond',
			skin_color: 'fair',
			eye_color: 'blue',
			birth_year: '19BBY',
			gender: 'male',
			planet_id: 1,
			films_id: [1, 2, 3, 4],
			species: [],
			starships_id: [2, 3],
		},
		{
			id: 2,
			name: 'C-3PO',
			height: '167',
			mass: 75,
			hair_color: 'n/a',
			skin_color: 'gold',
			eye_color: 'yellow',
			birth_year: '112BBY',
			gender: 'n/a',
			planet_id: '1',
			films_id: [1, 2, 3, 4, 5, 6],
			species: [2],
			starships_id: [],
		},
	] as Person[],
	[
		{
			id: 3,
			name: 'R2-D2',
			height: 96,
			mass: '32',
			hair_color: 'n/a',
			skin_color: 'white, blue',
			eye_color: 'red',
			birth_year: '33BBY',
			gender: 'n/a',
			planet_id: 8,
			films_id: [1, 2, 3, 4, 5, 6],
			species: [2],
			starships_id: [],
		},
		{
			id: 4,
			name: 'Darth Vader',
			height: 202,
			mass: '136',
			hair_color: 'none',
			skin_color: 'white',
			eye_color: 'yellow',
			birth_year: '41.9BBY',
			gender: 'male',
			planet_id: 1,
			films_id: [1, 2, 3, 6],
			species: [],
			starships_id: [13],
		},
	] as Person[],
]

const repository = new RepositoryMemory(people)

export class PersonRepositoryMemory implements PersonRepositoryInterface {
	async find(id: number): Promise<Person | null> {
		return repository.find(id) as Person
	}

	async search(query: QueryParams): Promise<PersonPagination> {
		return repository.search(query) as PersonPagination
	}
}
