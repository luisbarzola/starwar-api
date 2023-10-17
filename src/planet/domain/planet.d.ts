export type Planet = {
	id: number
	name: string
	rotation_period: string
	orbital_period: string
	diameter: string
	climate: string
	gravity: string
	terrain: string
	surface_water: string
	population: string
	residents_id: number[]
	films_id: number[]
}

export type QueryParams = {
	page: number | null
	q: string | null
}

type PlanetPagination = {
	next_page: number | null
	preview_page: number | null
	actual_page: number | null
	results: Planet[]
}
