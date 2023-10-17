import type StarshipRepositoryInterface from '../../domain/starship-repository'
import {
	Starship,
	QueryParams,
	StarshipPagination,
} from '../../domain/starship'
import { RepositoryMemory } from '../../../share/infrastructure/repository/memory/repository-memory'

export const starships = [
	[
		{
			id: 2,
			name: 'CR90 corvette',
			model: 'CR90 corvette',
			manufacturer: 'Corellian Engineering Corporation',
			cost_in_credits: '3500000',
			length: '150',
			max_atmosphering_speed: '950',
			crew: '30-165',
			passengers: '600',
			cargo_capacity: '3000000',
			consumables: '1 year',
			hyperdrive_rating: '2.0',
			mglt: '60',
			starship_class: 'corvette',
			pilots_id: [],
			films_id: [1, 3, 6],
		},
		{
			id: 3,
			name: 'Star Destroyer',
			model: 'Imperial I-class Star Destroyer',
			manufacturer: 'Kuat Drive Yards',
			cost_in_credits: '150000000',
			length: '1,600',
			max_atmosphering_speed: '975',
			crew: '47,060',
			passengers: 'n/a',
			cargo_capacity: '36000000',
			consumables: '2 years',
			hyperdrive_rating: '2.0',
			mglt: '60',
			starship_class: 'Star Destroyer',
			pilots_id: [],
			films_id: [1, 2, 3],
		},
	] as Starship[],
	[
		{
			id: 5,
			name: 'Sentinel-class landing craft',
			model: 'Sentinel-class landing craft',
			manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
			cost_in_credits: '240000',
			length: '38',
			max_atmosphering_speed: '1000',
			crew: '5',
			passengers: '75',
			cargo_capacity: '180000',
			consumables: '1 month',
			hyperdrive_rating: '1.0',
			mglt: '70',
			starship_class: 'landing craft',
			pilots_id: [],
			films_id: [1],
		},
		{
			id: 9,
			name: 'Death Star',
			model: 'DS-1 Orbital Battle Station',
			manufacturer:
				'Imperial Department of Military Research, Sienar Fleet Systems',
			cost_in_credits: '1000000000000',
			length: '120000',
			max_atmosphering_speed: 'n/a',
			crew: '342,953',
			passengers: '843,342',
			cargo_capacity: '1000000000000',
			consumables: '3 years',
			hyperdrive_rating: '4.0',
			mglt: '10',
			starship_class: 'Deep Space Mobile Battlestation',
			pilots_id: [],
			films_id: [1],
		},
	] as Starship[],
]

const repository = new RepositoryMemory(starships)

export class StarshipRepositoryMemory implements StarshipRepositoryInterface {
	async find(id: number): Promise<Starship | null> {
		return repository.find(id) as Starship
	}

	async search(query: QueryParams): Promise<StarshipPagination> {
		return repository.search(query) as StarshipPagination
	}
}
