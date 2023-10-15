import StarshipRepository from '../repository/starship-repository'
import StarshipController from './starship-controller'
import SearchStarships from '../../application/search-starship'

const starshipRepository = new StarshipRepository()

const controller = new StarshipController(
	new SearchStarships(starshipRepository),
)

export default controller
