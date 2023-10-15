import request from 'supertest'
import { app, server } from '../../src/server'
import { people } from '../../src/person/infrastructure/repository/person-repository-memory'
import { films } from '../../src/film/infrastructure/repository/film-repository-memory'
import { planets } from '../../src/planet/infrastructure/repository/planet-repository-memory'
import { starships } from '../../src/starship/infrastructure/repository/starship-repository-memory'

describe('PersonEndpoints', () => {
	afterAll(() => {
		server.close()
	})

	describe('search first page', () => {
		it('should return the people from first page', async () => {
			const res = await request(app).get('/people')
			expect(res.body).toEqual(people[0])
		})
	})

	describe('search second page', () => {
		it('should return the people from second page', async () => {
			const res = await request(app).get('/people?page=2')
			expect(res.body).toEqual(people[1])
		})
	})

	describe('search page not exist', () => {
		it('should return the people on non-existent page', async () => {
			const res = await request(app).get('/people?page=3')
			expect(res.body).toEqual([])
		})
	})

	describe('find exist person by id', () => {
		it('should return the one person', async () => {
			const res = await request(app).get('/people/1')
			expect(res.body).toEqual(people[0][0])
		})
	})

	describe('find not exist person by id', () => {
		it('should return empty object', async () => {
			const res = await request(app).get('/people/100')

			expect(res.body).toEqual({})
			expect(res.status).toEqual(404)
		})
	})

	describe('find complete person by id ', () => {
		it('should return complete person', async () => {
			const res = await request(app).get('/people/1/full')

			expect(res.body).toEqual({
				...people[0][0],
				films: films.flatMap(items => items),
				planet: planets[0][0],
				species: [],
				starships: [starships[0][0], starships[0][1]],
			})
		})
	})
})
