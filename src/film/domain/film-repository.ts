import type { Film, QueryParams } from './film'

type FilmRepository = {
	find: (id: number) => Promise<Film | null>
	search: (query: QueryParams) => Promise<Film[]>
}
export default FilmRepository
