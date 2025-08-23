import express from "express"
import {route} from "./routes/userRoute.js"
import {connectDB} from "./config/dbConfig.js"

// app
const app = express()
const port = process.env.PORT || 3000


// connection with mongoDB
connectDB()



// Routes


import { routeRegister } from "./routes/userRegisterRoute.js"
app.use ("/register" , routeRegister)
app.use(route)




// listening port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {app}