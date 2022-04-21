import config, { IConfig } from 'config'
import mongoose, { Mongoose } from 'mongoose'

const databaseConfig: IConfig = config.get('App.database')

export const connect = async (): Promise<Mongoose> => {
  return await mongoose.connect(databaseConfig.get('url'))
}

mongoose.connection.on('connected', () => {
  console.log('Connected to the database!')
})
