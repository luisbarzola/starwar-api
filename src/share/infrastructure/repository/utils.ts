export function getFirstNumberFromUrl(url: string): number {
	const id: string = url.slice(-1)

	return parseInt(id)
}
