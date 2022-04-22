import config from 'config'
import request from 'supertest'
import AuthService from '../src/services/auth'

const apiUrl = config.get('App.apiUrl')

describe('When creating a new user', () => {
  it('Should sucessfuly create a new user', async () => {
    const newUser = {
      username: 'vitor',
      email: 'vitor@mail.com',
      password: '123'
    }
    const response = await request(apiUrl).post('/user').send(newUser)
    expect(response.status).toBe(201)
    await expect(
      AuthService.comparePassword(newUser.password, response.body.password)
    ).resolves.toBeTruthy()
    expect(response.body).toEqual(
      expect.objectContaining({
        ...{ password: expect.any(String) }
      })
    )
  })
})
