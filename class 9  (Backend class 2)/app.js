import express from "express"
import {route} from "./routes/userRoute.js"
import { connectDB } from "./config/dbConfig.js"

const app = express()
const port = process.env.PORT || 3000

app.use(route)
connectDB();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {app}