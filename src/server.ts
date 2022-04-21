import config, { IConfig } from 'config'
import express from 'express'
import cors from 'cors'

import { connect } from './database'
import { userRoute } from './routes/index'

const portConfig: IConfig = config.get('App.port')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRoute)

app.listen(portConfig, async () => {
  await connect()
  console.log(`Server is running at ${portConfig}`)
})

export default app
