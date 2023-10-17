import request from 'supertest'
import { app, server } from '../../src/server'
import { planets as planetsMemory } from '../../src/planet/infrastructure/repository/planet-repository-memory'

describe('PlanetEndpoints', () => {
	afterAll(() => {
		server.close()
	})

	describe('search first page', () => {
		it('should return the planets from first page', async () => {
			const res = await request(app).get('/planets')
			expect(res.body).toEqual(planetsMemory[0])
		})
	})

	describe('search second page', () => {
		it('should return the planets from second page', async () => {
			const res = await request(app).get('/planets?page=2')
			expect(res.body).toEqual(planetsMemory[1])
		})
	})

	describe('search page not exist', () => {
		it('should return the planets on non-existent page', async () => {
			const res = await request(app).get('/planets?page=3')
			expect(res.body).toEqual({
				actual_page: 3,
				next_page: null,
				preview_page: 2,
				results: [],
			})
		})
	})
})
