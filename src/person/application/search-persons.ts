import type PersonRepository from '../domain/person-repository'
import PersonModel from '../domain/person-model'
import { PersonPagination } from '../domain/person'
import { QueryParams } from '../../share/application/query'

export default class AllPersons {
	private readonly person: PersonModel

	constructor(private readonly personRepository: PersonRepository) {
		this.person = new PersonModel(this.personRepository)
	}

	async execute(query: QueryParams): Promise<PersonPagination> {
		return await this.person.search(query)
	}
}
