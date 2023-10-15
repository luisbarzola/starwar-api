import PeopleController from './people-controller'
import PersonRepository from '../repository/person-repository'
import FindPerson from '../../application/find-person'
import FindFullPerson from '../../application/find-full-person'
import PlanetRepository from '../../../planet/infrastructure/repository/planet-repository'
import FilmRepository from '../../../film/infrastructure/repository/film-repository'
import StarshipRepository from '../../../starship/infrastructure/repository/starship-repository'
import SearchPersons from '../../application/search-persons'

const personRepository = new PersonRepository()
const planetRepository = new PlanetRepository()
const filmRepository = new FilmRepository()
const starshipRepository = new StarshipRepository()

const controller = new PeopleController(
	new FindPerson(personRepository),
	new FindFullPerson(
		personRepository,
		planetRepository,
		filmRepository,
		starshipRepository,
	),
	new SearchPersons(personRepository),
)

export default controller
