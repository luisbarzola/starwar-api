import type { Starship, QueryParams, StarshipPagination } from './starship'

type StarshipRepository = {
	find: (id: number) => Promise<Starship | null>
	search: (query: QueryParams) => Promise<StarshipPagination>
}
export default StarshipRepository
