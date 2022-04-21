import config from 'config'
import request from 'supertest'

const apiUrl = config.get('App.apiUrl')

describe('When creating a new user', () => {
  it('Should sucessfuly create a new user', async () => {
    const newUser = {
      username: 'Vitor',
      email: 'vitor@teste.com',
      password: '123'
    }
    const response = await request(apiUrl).post('/user').send(newUser)
    expect(response.status).toBe(201)
  })
})
