import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import exampleRouter from '../api/routes/example.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/example', exampleRouter)

export default app
