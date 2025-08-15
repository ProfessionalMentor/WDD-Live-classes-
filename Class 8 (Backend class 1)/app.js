import express from "express"
import {route} from "./routes/userRoute.js"

const app = express()
const port = 3000

app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {app}