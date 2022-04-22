import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'

type Token = {
  sub: string
}

export default class AuthService {
  public static async hash(
    password: string,
    salt = 10
  ): Promise<string> {
    return await bcrypt.hash(password, salt)
  }

  public static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  public static createJWT(sub: string): string {
    return jwt.sign({ sub }, config.get('App.auth.privateKey'), {
      expiresIn: config.get('App.auth.expiresIn')
    })
  }

  public static verifyJWT(token: string): Token {
    return jwt.verify(token, config.get('App.auth.privateKey')) as Token
  }
}
