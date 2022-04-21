import mongoose, { model } from 'mongoose'

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

export default model<User>('User', schema)
