import type PersonRepository from '../domain/person-repository'
import PersonModel from '../domain/person-model'
import { Person, PersonFull } from '../domain/person'

export default class FindPerson {
	private readonly person: PersonModel

	constructor(private readonly personRepository: PersonRepository) {
		this.person = new PersonModel(this.personRepository)
	}

	async execute(id: number): Promise<Person | PersonFull | null> {
		await this.person.find(id)

		return this.person.data()
	}
}
