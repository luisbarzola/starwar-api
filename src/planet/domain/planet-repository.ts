import type { Planet, QueryParams } from './planet'

type PlanetRepository = {
	find: (id: number) => Promise<Planet | null>
	search: (query: QueryParams) => Promise<Planet[]>
}
export default PlanetRepository
