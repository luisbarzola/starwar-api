import { Person, QueryParams, PersonPagination } from './person'

type PersonRepository = {
	find: (id: number) => Promise<Person | null>
	search: (query: QueryParams) => Promise<PersonPagination>
}
export default PersonRepository
