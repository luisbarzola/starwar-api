import PlanetModel from '../../planet/domain/planet-model'
import PersonRepository from './person-repository'
import { Person, PersonFull, QueryParams, PersonPagination } from './person'
import Planet from '../../planet/domain/planet'
import FilmModel from '../../film/domain/film-model'
import Film from '../../film/domain/film'
import StarshipModel from '../../starship/domain/starship-model'
import Starship from '../../starship/domain/starship'

export default class PersonModel {
	private person: PersonFull | Person | null = null

	constructor(private readonly repository: PersonRepository) {}

	async find(id: number): Promise<PersonModel> {
		this.person = await this.repository.find(id)

		return this
	}

	data(): PersonFull | Person | null {
		return this.person
	}

	exist(): boolean {
		return this.person !== null
	}

	async loadFull(
		planetModel: PlanetModel,
		filmModel: FilmModel,
		starship: StarshipModel,
	): Promise<PersonModel> {
		if (!this.exist()) return this

		const result = await Promise.all<
			typeof Planet | typeof Film | typeof Starship | null
		>([
			planetModel.find(this.person?.planet_id ?? 0),
			Promise.all<typeof Film | null>(
				(this.person?.films_id ?? []).map(async id => await filmModel.find(id)),
			),
			Promise.all<typeof Starship | null>(
				(this.person?.starships_id ?? []).map(
					async id => await starship.find(id),
				),
			),
		])

		const planet = result[0]
		const films = result[1] as Array<typeof Film>
		const starships = result[2] as Array<typeof Starship>

		const personFull: PersonFull = {
			...(this.person as Person),
			planet,
			films,
			starships,
		}

		this.person = personFull

		return this
	}

	async search(query: QueryParams): Promise<PersonPagination> {
		return await this.repository.search(query)
	}
}
