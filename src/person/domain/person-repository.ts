import { Person, QueryParams } from './person'

type PersonRepository = {
	find: (id: number) => Promise<Person | null>
	search: (query: QueryParams) => Promise<Person[]>
}
export default PersonRepository
