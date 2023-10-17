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

		if (this.data[page - 1] !== undefined) {
			return this.data[page - 1]
		}

		return {
			next_page: this.data.length === page ? page + 1 : null,
			preview_page: page === 1 ? null : page - 1,
			actual_page: page,
			results: [],
		}
	}

	private all(): any[] {
		return this.data.flatMap(page => page)
	}
}
