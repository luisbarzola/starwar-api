export type Film = {
	id: number
	title: string
	episode_id: number
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	characters_id: number[]
	planets_id: number[]
	starships_id: number[]
}

export type QueryParams = {
	page: number | null
	q: string | null
}

type FilmPagination = {
	next_page: number | null
	preview_page: number | null
	actual_page: number | null
	results: Film[]
}
