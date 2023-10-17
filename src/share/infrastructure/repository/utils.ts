export function getFirstNumberFromUrl(url: string): number {
	const id = url.match(/\/(\d+)\/$/)

	if (id === null || typeof id[1] !== 'string') {
		throw new Error('Invalid id')
	}

	return parseInt(id[1])
}

export function getPage(url: string): number {
	const page = url.match(/page=(\d+)/)

	if (page === null || typeof page[1] !== 'string') {
		throw new Error('Invalid page')
	}

	return parseInt(page[1])
}
