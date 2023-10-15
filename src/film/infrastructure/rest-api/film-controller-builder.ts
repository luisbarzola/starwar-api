import FilmRepository from '../repository/film-repository'
import FilmController from './film-controller'
import SearchFilms from '../../application/search-films'

const filmRepository = new FilmRepository()

const controller = new FilmController(new SearchFilms(filmRepository))

export default controller
