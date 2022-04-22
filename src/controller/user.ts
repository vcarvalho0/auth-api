import { Request, Response } from 'express'

import User from '../model/userModel'
import AuthService from '../services/auth'

export class UserController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    } catch (error) {
      console.log(error)
    }
  }

  public async authenticate(req: Request, res: Response): Promise<Response> {
    const email = req.body.email
    const user = await User.findOne(email)

    if (!user) {
      return res.status(401).json('Não foi possível realizar o login')
    }

    if (!(await AuthService.comparePassword(req.body.password, user.password))) {
      return res.status(401).json('Não foi possível realizar o login')
    }

    const token = AuthService.createJWT(user.id)

    return res.send({ ...user.toJSON(), ...{ token } })
  }

  public async me(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id
    const user = await User.findOne({ _id: userId })

    if (!user) {
      return res.status(401).json('User not found!')
    }

    return res.status(201).json(user)
  }
}
