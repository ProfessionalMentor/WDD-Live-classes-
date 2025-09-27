import express from 'express'
import {connectDB} from './config/dbConfig.js'
const app = express()


connectDB()

// Routes

import { userRegister } from './routes/userRegisterRoute.js'

app.use(express.json())

app.use ('/' , userRegister )



export default app