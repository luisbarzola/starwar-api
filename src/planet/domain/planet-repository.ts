import type { Planet, QueryParams, PlanetPagination } from './planet'

type PlanetRepository = {
	find: (id: number) => Promise<Planet | null>
	search: (query: QueryParams) => Promise<PlanetPagination>
}
export default PlanetRepository
