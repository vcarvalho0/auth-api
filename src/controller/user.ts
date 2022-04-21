import { Request, Response } from 'express'

import User from '../model/userModel'

export class UserController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    } catch (error) {
      console.log(error)
    }
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
