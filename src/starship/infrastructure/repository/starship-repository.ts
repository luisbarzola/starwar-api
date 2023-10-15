import RepositorySwapi from './starship-repository-swapi'
import { StarshipRepositoryMemory } from './starship-repository-memory'

let repository = RepositorySwapi

if (process.env.NODE_ENV === 'test') {
	repository = StarshipRepositoryMemory
}

export default repository
