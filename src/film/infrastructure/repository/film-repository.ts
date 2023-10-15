import RepositorySwapi from './film-repository-swapi'
import { FilmRepositoryMemory } from './film-repository-memory'

let repository = RepositorySwapi

if (process.env.NODE_ENV === 'test') {
	repository = FilmRepositoryMemory
}

export default repository
