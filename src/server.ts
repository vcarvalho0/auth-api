import config, { IConfig } from 'config'
import express from 'express'
import cors from 'cors'

import { connect } from './database'

const portConfig: IConfig = config.get('App.port')

const app = express()

app.use(express.json())
app.use(cors())

app.listen(portConfig, () => {
  console.log(`Server is running at ${portConfig}`)
  connect()
})

export default app
