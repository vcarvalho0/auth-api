import { Router } from 'express'
import { UserController } from '../controller/user'

export const userRoute = Router()

const User = new UserController()

userRoute.post('/user', User.create)
userRoute.post('/user', User.authenticate)
userRoute.get('/user/:id', User.me)
