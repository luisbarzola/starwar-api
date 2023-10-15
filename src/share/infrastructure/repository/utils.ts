export function getFirstNumberFromUrl(url: string): number {
	const id = url.match(/\/(\d+)\/$/)

	if (id === null || typeof id[1] !== 'string') {
		throw new Error('Invalid person id')
	}

	return parseInt(id[1])
}
