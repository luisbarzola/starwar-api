export function getFirstNumberFromUrl(url: string): number {
	const id = url.slice(-1)

	if (id === null || typeof id !== 'string') {
		throw new Error(`Invalid id: ulr: ${url} and id: ${id}`)
	}

	return parseInt(id)
}
