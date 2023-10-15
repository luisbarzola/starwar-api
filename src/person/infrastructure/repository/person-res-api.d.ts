type PersonResponse = {
	name: string
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	homeworld: string
	films: string[]
	species: any[]
	vehicles: string[]
	starships: string[]
	created: string
	edited: string
	url: string
}

type PersonsResponse = {
	count: number
	next: string | null
	previous: string | null
	results: PersonResponse[]
}

export type { PersonResponse, PersonsResponse }
