import RepositorySwapi from './planet-repository-swapi'
import { PlanetRepositoryMemory } from './planet-repository-memory'

let repository = RepositorySwapi

if (process.env.NODE_ENV === 'test') {
	repository = PlanetRepositoryMemory
}

export default repository
