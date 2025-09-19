import express from "express"
import {connectDB} from "./config/dbConfig.js"
import cors from 'cors';

// app
const app = express()
const port = process.env.PORT || 3000


// connection with mongoDB
connectDB()



app.use(cors(
  {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
  },
))
app.use(express.json());


// Routes
import { routeRegister } from "./routes/userRegisterRoute.js"
app.use ("/" , routeRegister)


// listening port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {app}