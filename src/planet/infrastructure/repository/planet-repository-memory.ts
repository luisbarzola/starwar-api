import type PlanetRepositoryInterface from '../../domain/planet-repository'
import { Planet, QueryParams, PlanetPagination } from '../../domain/planet'
import { RepositoryMemory } from '../../../share/infrastructure/repository/memory/repository-memory'

export const planets = [
	[
		{
			id: 1,
			name: 'Tatooine',
			rotation_period: '23',
			orbital_period: '304',
			diameter: '10465',
			climate: 'arid',
			gravity: '1 standard',
			terrain: 'desert',
			surface_water: '1',
			population: '200000',
			residents_id: [1, 2, 4, 6, 7, 8, 9, 11, 43, 62],
			films_id: [1, 3, 4, 5, 6],
		},
		{
			id: 2,
			name: 'Alderaan',
			rotation_period: '24',
			orbital_period: '364',
			diameter: '12500',
			climate: 'temperate',
			gravity: '1 standard',
			terrain: 'grasslands, mountains',
			surface_water: '40',
			population: '2000000000',
			residents_id: [5, 68, 81],
			films_id: [1, 6],
		},
	] as Planet[],
	[
		{
			id: 3,
			name: 'Yavin IV',
			rotation_period: '24',
			orbital_period: '4818',
			diameter: '10200',
			climate: 'temperate, tropical',
			gravity: '1 standard',
			terrain: 'jungle, rainforests',
			surface_water: '8',
			population: '1000',
			residents_id: [],
			films_id: [1],
		},
		{
			id: 4,
			name: 'Hoth',
			rotation_period: '23',
			orbital_period: '549',
			diameter: '7200',
			climate: 'frozen',
			gravity: '1.1 standard',
			terrain: 'tundra, ice caves, mountain ranges',
			surface_water: '100',
			population: 'unknown',
			residents_id: [],
			films_id: [2],
		},
	] as Planet[],
]

const repository = new RepositoryMemory(planets)

export class PlanetRepositoryMemory implements PlanetRepositoryInterface {
	async find(id: number): Promise<Planet | null> {
		return repository.find(id) as Planet
	}

	async search(query: QueryParams): Promise<PlanetPagination> {
		return repository.search(query) as PlanetPagination
	}
}
