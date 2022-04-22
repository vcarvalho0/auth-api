import mongoose, { model } from 'mongoose'
import AuthService from '../services/auth'

type User = {
  username: string
  email: string
  password: string
}

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

schema.pre<User>('save', async function (): Promise<any> {
  try {
    const hashPassword = await AuthService.hash(this.password)
    this.password = hashPassword
  } catch (err) {
    console.log(`Error hashing password for the user ${this.username}`, err)
  }
})

export default model<User>('User', schema)
