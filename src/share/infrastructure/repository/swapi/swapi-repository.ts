import { getPage } from '../../repository/utils'
import fetch from 'node-fetch'

export type QueryParams = {
	page: number | null
	q: string | null
}

type Pagination = {
	next_page: number | null
	preview_page: number | null
	actual_page: number | null
	results: any[]
}

export type Response = {
	count: number
	next: string | null
	previous: string | null
	results: object[]
}

export default class SwapiRepository {
	constructor(private readonly url: string) {}

	async search(
		query: QueryParams,
		transformer: (data: any) => any,
	): Promise<Pagination> {
		const page = query.page ?? 1
		const search = query.q !== null ? `&search=${query.q}` : ''
		const queryUrl = `/?page=${page}${search}`

		try {
			console.log(`${this.url}${queryUrl}`)
			const response = await fetch(`${this.url}${queryUrl}`)

			if (response.status !== 200) {
				return {
					next_page: null,
					preview_page: null,
					actual_page: page,
					results: [],
				}
			}

			const json = await response.json()

			return toPaginator(json, page, transformer)
		} catch (error) {
			console.error(error)
			return {
				next_page: null,
				preview_page: null,
				actual_page: page,
				results: [],
			}
		}
	}
}

function toPaginator(
	response: Response,
	page: number,
	transformer: (data: object) => object,
): Pagination {
	return {
		next_page: response.next !== null ? getPage(response.next) : null,
		preview_page:
			response.previous !== null ? getPage(response.previous) : null,
		actual_page: page,
		results: response.results.map(body => transformer(body)),
	}
}
