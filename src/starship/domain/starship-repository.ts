import type { Starship, QueryParams } from './starship'

type StarshipRepository = {
	find: (id: number) => Promise<Starship | null>
	search: (query: QueryParams) => Promise<Starship[]>
}
export default StarshipRepository
