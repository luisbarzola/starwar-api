type Person = {
	id: number
	name: string
	height: number
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	planet_id: number
	films_id: number[]
	species: any[]
	starships_id: number[]
}

type PersonAggregate = {
	planet: Planet | null
	films: Film[]
	starships: Starship[]
}

type PersonFull = Person & PersonAggregate

type QueryParams = {
	page: number | null
}

export type { Person, PersonFull, QueryParams }
