import type PersonRepository from '../domain/person-repository'
import PersonModel from '../domain/person-model'
import { Person } from '../domain/person'
import { QueryParams } from '../../share/application/query'

export default class AllPersons {
	private readonly person: PersonModel

	constructor(private readonly personRepository: PersonRepository) {
		this.person = new PersonModel(this.personRepository)
	}

	async execute(query: QueryParams): Promise<Person[]> {
		return await this.person.search(query)
	}
}
