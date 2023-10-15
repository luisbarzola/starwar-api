export type Starship = {
	id: number
	name: string
	model: string
	manufacturer: string
	cost_in_credits: string
	length: string
	max_atmosphering_speed: string
	crew: string
	passengers: string
	cargo_capacity: string
	consumables: string
	hyperdrive_rating: string
	mglt: string
	starship_class: string
	pilots_id: number[]
	films_id: number[]
}

export type QueryParams = {
	page: number | null
}
