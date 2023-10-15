import PlanetRepository from '../../../planet/infrastructure/repository/planet-repository'
import PlanetController from './planet-controller'
import SearchPlanet from '../../application/search-planets'

const planetRepository = new PlanetRepository()

const controller = new PlanetController(new SearchPlanet(planetRepository))

export default controller
