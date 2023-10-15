import RepositorySwapi from './person-repository-swapi'
import { PersonRepositoryMemory } from './person-repository-memory'

let repository = RepositorySwapi

if (process.env.NODE_ENV === 'test') {
	repository = PersonRepositoryMemory
}

export default repository
