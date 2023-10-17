import request from 'supertest'
import { app, server } from '../../src/server'
import { films } from '../../src/film/infrastructure/repository/film-repository-memory'

describe('FilmEndpoints', () => {
	afterAll(() => {
		server.close()
	})

	describe('search first page', () => {
		it('should return the films from first page', async () => {
			const res = await request(app).get('/films')
			expect(res.body).toEqual(films[0])
		})
	})

	describe('search second page', () => {
		it('should return the films from second page', async () => {
			const res = await request(app).get('/films?page=2')
			expect(res.body).toEqual(films[1])
		})
	})

	describe('search page not exist', () => {
		it('should return the films on non-existent page', async () => {
			const res = await request(app).get('/films?page=3')
			expect(res.body).toEqual({
				actual_page: 3,
				next_page: null,
				preview_page: 2,
				results: [],
			})
		})
	})
})
