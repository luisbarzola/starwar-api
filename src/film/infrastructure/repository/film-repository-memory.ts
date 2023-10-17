import type FilmRepositoryInterface from '../../domain/film-repository'
import { Film, QueryParams, FilmPagination } from '../../domain/film'
import { RepositoryMemory } from '../../../share/infrastructure/repository/memory/repository-memory'

export const films = [
	[
		{
			id: 1,
			title: 'A New Hope',
			episode_id: 4,
			opening_crawl:
				"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
			director: 'George Lucas',
			producer: 'Gary Kurtz, Rick McCallum',
			release_date: '1977-05-25',
			characters_id: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 81,
			],
			planets_id: [1, 2, 3],
			starships_id: [2, 3, 5, 9, 10, 11, 12, 13],
		},
		{
			id: 2,
			title: 'The Empire Strikes Back',
			episode_id: 5,
			opening_crawl:
				'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
			director: 'Irvin Kershner',
			producer: 'Gary Kurtz, Rick McCallum',
			release_date: '1980-05-17',
			characters_id: [
				1, 2, 3, 4, 5, 10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26,
			],
			planets_id: [4, 5, 6, 27],
			starships_id: [3, 10, 11, 12, 15, 17, 21, 22, 23],
		},
	] as Film[],
	[
		{
			id: 3,
			title: 'Return of the Jedi',
			episode_id: 6,
			opening_crawl:
				'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
			director: 'Richard Marquand',
			producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
			release_date: '1983-05-25',
			characters_id: [
				1, 2, 3, 4, 5, 10, 13, 14, 16, 18, 20, 21, 22, 25, 27, 28, 29, 30, 31,
				45,
			],
			planets_id: [1, 5, 7, 8, 9],
			starships_id: [2, 3, 10, 11, 12, 15, 17, 22, 23, 27, 28, 29],
		},
		{
			id: 4,
			title: 'The Phantom Menace',
			episode_id: 1,
			opening_crawl:
				'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
			director: 'George Lucas',
			producer: 'Rick McCallum',
			release_date: '1999-05-19',
			characters_id: [
				2, 3, 10, 11, 16, 20, 21, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
				43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
			],
			planets_id: [1, 8, 9],
			starships_id: [31, 32, 39, 40, 41],
		},
	] as Film[],
]

const repository = new RepositoryMemory(films)

export class FilmRepositoryMemory implements FilmRepositoryInterface {
	async find(id: number): Promise<Film | null> {
		return repository.find(id) as Film
	}

	async search(query: QueryParams): Promise<FilmPagination> {
		return repository.search(query) as FilmPagination
	}
}
