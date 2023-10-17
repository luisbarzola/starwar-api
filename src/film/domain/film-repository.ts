import type { Film, QueryParams, FilmPagination } from './film'

type FilmRepository = {
	find: (id: number) => Promise<Film | null>
	search: (query: QueryParams) => Promise<FilmPagination>
}
export default FilmRepository
