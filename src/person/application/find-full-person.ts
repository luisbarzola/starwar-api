import type PersonRepository from '../domain/person-repository'
import PersonModel from '../domain/person-model'
import { Person, PersonFull } from '../domain/person'
import PlanetRepository from '../../planet/domain/planet-repository'
import PlanetModel from '../../planet/domain/planet-model'
import FilmRepository from '../../film/domain/film-repository'
import FilmModel from '../../film/domain/film-model'
import StarshipRepository from '../../starship/domain/starship-repository'
import StarshipModel from '../../starship/domain/starship-model'

export default class FindFullPerson {
	private readonly person: PersonModel
	private readonly planet: PlanetModel
	private readonly film: FilmModel
	private readonly starship: StarshipModel

	constructor(
		personRepository: PersonRepository,
		planetRepository: PlanetRepository,
		filmRepository: FilmRepository,
		starshipRepository: StarshipRepository,
	) {
		this.person = new PersonModel(personRepository)
		this.planet = new PlanetModel(planetRepository)
		this.film = new FilmModel(filmRepository)
		this.starship = new StarshipModel(starshipRepository)
	}

	async execute(id: number): Promise<Person | PersonFull | null> {
		await this.person.find(id)
		await this.person.loadFull(this.planet, this.film, this.starship)

		return this.person.data()
	}
}
