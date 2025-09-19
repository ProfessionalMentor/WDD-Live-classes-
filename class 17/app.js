import express from "express"
const app = express()

// route

import {router} from "./routes/userRoute.js"

app.use(router)



export default app