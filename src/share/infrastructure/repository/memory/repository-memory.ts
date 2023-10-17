type QueryParams = {
	page: number | null
}

export class RepositoryMemory {
	constructor(private readonly data: any[][]) {}

	find(id: number): any | null {
		const result = this.all().find(item => item.id === id)

		if (result === null) return null

		return result
	}

	search(query: QueryParams): any {
		const page = query.page ?? 1

		const response = {
			next_page: this.data.length <= page ? null : page + 1,
			preview_page: page === 1 ? null : page - 1,
			actual_page: page,
		}

		if (this.data[page - 1] !== undefined) {
			return {
				...response,
				results: this.data[page - 1],
			}
		}

		return {
			...response,
			results: [],
		}
	}

	private all(): any[] {
		return this.data.flatMap(page => page)
	}
}
