import request from 'supertest'
import { app, server } from '../../src/server'
import { starships } from '../../src/starship/infrastructure/repository/starship-repository-memory'

describe('InMemoryStarshipEndpoints', () => {
	afterAll(() => {
		server.close()
	})

	describe('search first page', () => {
		it('should return the starships from first page', async () => {
			const res = await request(app).get('/starships')
			expect(res.body).toEqual(starships[0])
		})
	})

	describe('search second page', () => {
		it('should return the starships from second page', async () => {
			const res = await request(app).get('/starships?page=2')
			expect(res.body).toEqual(starships[1])
		})
	})

	describe('search page not exist', () => {
		it('should return the starships on non-existent page', async () => {
			const res = await request(app).get('/starships?page=3')
			expect(res.body).toEqual([])
		})
	})
})
