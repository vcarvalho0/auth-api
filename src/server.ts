import express from 'express'
import cors from 'cors'

import { connect } from './database/connection'

const port = 8080

const app = express()

app.use(express.json())
app.use(cors())

app.listen(() => {
  console.log(`Server is running at ${port}`)
  connect()
})
