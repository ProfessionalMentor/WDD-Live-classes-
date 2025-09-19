import express from "express"
import {route} from "./routes/userRoute.js"
import {connectDB} from "./config/dbConfig.js"
import cors from 'cors';

// app
const app = express()
const port = process.env.PORT || 3000


// connection with mongoDB
connectDB()



// Routes


import { routeRegister } from "./routes/userRegisterRoute.js"
app.use ("/" , routeRegister)
app.use(route)

app.use(cors(
  {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200 
  },
))


// listening port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {app}